import { Channel, Message, MessageModel, User } from '@waweb/model';
import { useEffect, useMemo, useState } from 'react';
import fetchChannels from './fetch-channels';
import fetchMessages from './fetch-messages';
import fetchUser from './fetch-user';
import supabase from './supabase';

export interface StoreApi {
  activeChannel: Channel | null;
  timeline: MessageModel[];
  channels: Channel[];
  users: Record<string, User>;
}

/**
 * @param {string} slug the currently selected Channel
 */
const useStore = (slug: string): StoreApi => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [users] = useState<Record<string, User>>({});
  const [newMessage, handleNewMessage] = useState<Message | null>(null);
  const [newChannel, handleNewChannel] = useState<Channel | null>(null);
  const [newOrUpdatedUser, handleNewOrUpdatedUser] = useState<User | null>(
    null
  );
  const [deletedChannel, handleDeletedChannel] = useState<Channel | null>(null);
  const [deletedMessage, handleDeletedMessage] = useState<Message | null>(null);

  const activeChannel = useMemo(
    () => channels.find((it) => it.slug === slug) ?? null,
    [channels, slug]
  );

  // Load initial data and set up listeners
  useEffect(() => {
    // Get Channels
    fetchChannels(setChannels);
    // Listen for new and deleted messages
    const messageListener = supabase
      .from('messages')
      .on('INSERT', (payload) => handleNewMessage(payload.new))
      .on('DELETE', (payload) => handleDeletedMessage(payload.old))
      .subscribe();
    // Listen for changes to our users
    const userListener = supabase
      .from('users')
      .on('*', (payload) => handleNewOrUpdatedUser(payload.new))
      .subscribe();
    // Listen for new and deleted channels
    const channelListener = supabase
      .from('channels')
      .on('INSERT', (payload) => handleNewChannel(payload.new))
      .on('DELETE', (payload) => handleDeletedChannel(payload.old))
      .subscribe();
    // Cleanup on unmount
    return () => {
      messageListener?.unsubscribe();
      userListener?.unsubscribe();
      channelListener?.unsubscribe();
    };
  }, []);

  // Update when the route changes
  useEffect(() => {
    activeChannel &&
      fetchMessages(activeChannel.id, (timeline) => {
        // console.info(slug + ' channel activated.', timeline);
        setMessages(timeline);
      });
  }, [channels, slug]);

  // New message received from Postgres
  useEffect(() => {
    if (newMessage && newMessage.channel_id === activeChannel?.id) {
      // console.log('Received server message ', newMessage);
      const handleAsync = async () => {
        const authorId = newMessage.user_id;
        if (users[authorId])
          await fetchUser(authorId, (user) => handleNewOrUpdatedUser(user));
        setMessages(messages.concat(newMessage));
      };
      handleAsync();
    }
  }, [newMessage]);

  // Deleted message received from postgres
  useEffect(() => {
    if (deletedMessage) {
      // console.log('Removing deleted message ', deletedMessage);
      setMessages(
        messages.filter((message) => message.id !== deletedMessage.id)
      );
    }
  }, [deletedMessage]);

  // New channel received from Postgres
  useEffect(() => {
    if (newChannel) {
      // console.log('Received server channel ', newChannel);
      setChannels(channels.concat(newChannel));
    }
  }, [channels, newChannel]);

  // Deleted channel received from postgres
  useEffect(() => {
    if (deletedChannel) {
      // console.log('Removing deleted channel ', deletedChannel);
      setChannels(
        channels.filter((channel) => channel.id !== deletedChannel.id)
      );
    }
  }, [channels, deletedChannel]);

  // New or updated user received from Postgres
  useEffect(() => {
    if (newOrUpdatedUser) {
      // console.log('A new or updated user has connected.', newOrUpdatedUser);
      users[newOrUpdatedUser.id] = newOrUpdatedUser;
    }
  }, [users, newOrUpdatedUser]);

  const timelineEntries: MessageModel[] = messages.map((x) => ({
    ...x,
    type: 'comment',
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    channel: activeChannel!,
    author: users[x.user_id],
  }));

  return {
    // We export computed values here after initial load
    timeline: timelineEntries,
    activeChannel,
    channels:
      channels !== null
        ? channels.sort((a, b) => a.slug.localeCompare(b.slug))
        : [],
    users,
  };
};

export default useStore;
