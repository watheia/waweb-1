import { Channel, Message, User } from '@waweb/model';
import { useEffect, useState } from 'react';
import fetchChannels from './fetch-channels';
import fetchMessages from './fetch-messages';
import fetchUser from './fetch-user';
import supabase from './supabase';

type Props = {
  channelId: bigint;
};

/**
 * @param {number} channelId the currently selected Channel
 */
const useStore = ({ channelId }: Props) => {
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
      messageListener.unsubscribe();
      userListener.unsubscribe();
      channelListener.unsubscribe();
    };
  }, []);

  // Update when the route changes
  useEffect(() => {
    if (channelId > 0) {
      console.log('Fetch messages for ', channelId);
      fetchMessages(channelId, (messages) => {
        console.log('(channelId, messages) = ', channelId, messages);
        setMessages(messages);
      });
    }
  }, [channelId]);

  // New message received from Postgres
  useEffect(() => {
    if (newMessage && newMessage.channel_id === channelId) {
      console.log('Recieved server message ', newMessage);
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
      console.log('Removing deleted message ', deletedMessage);
      setMessages(
        messages.filter((message) => message.id !== deletedMessage.id)
      );
    }
  }, [deletedMessage]);

  // New channel received from Postgres
  useEffect(() => {
    if (newChannel) {
      console.log('Recieved server channel ', newChannel);
      setChannels(channels.concat(newChannel));
    }
  }, [newChannel]);

  // Deleted channel received from postgres
  useEffect(() => {
    if (deletedChannel) {
      console.log('Removing deleted channel ', deletedChannel);
      setChannels(
        channels.filter((channel) => channel.id !== deletedChannel.id)
      );
    }
  }, [deletedChannel]);

  // New or updated user received from Postgres
  useEffect(() => {
    if (newOrUpdatedUser) {
      console.log('A new or updated user has connected.', newOrUpdatedUser);
      users[newOrUpdatedUser.id] = newOrUpdatedUser;
    }
  }, [newOrUpdatedUser]);

  return {
    // We can export computed values here to map the authors to each message
    messages: messages.map((x) => ({ ...x, author: users[x.user_id] })),
    channels:
      channels !== null
        ? channels.sort((a, b) => a.slug.localeCompare(b.slug))
        : [],
    users,
  };
};

export default useStore;
