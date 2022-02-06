import { AppRole, Channel, Children, DivProps, User } from '@waweb/model';
import { addChannel, deleteChannel } from '@waweb/store';
import slugify from '@waweb/util.slugify';
import ChannelNav from './channel-nav';
import Layout from './layout';
import styles from './layout-home.module.css';

export interface LayoutChatProps extends DivProps {
  user: User;
  userRoles: AppRole[];
  channels: Channel[];
  activeChannel: Channel | null;
  children: Children;
}

export default function LayoutHome({
  channels,
  activeChannel,
  userRoles,
  user,
  children,
  ...props
}: LayoutChatProps) {
  const isAdmin = userRoles.includes(AppRole.Admin);

  const handleCreate = async (name: string) => {
    const slug = prompt('Please enter your name');
    if (user && slug) {
      addChannel(slugify(slug), user.id);
    } else {
      console.error('Channel creation failed.');
    }
  };

  const handleDelete = async (channel: Channel) => {
    if (
      // user is active
      user &&
      // channel is not the default
      channel.slug !== 'public' &&
      // user is admin or owner of channel
      (isAdmin || channel.created_by === user.id)
    ) {
      deleteChannel(channel.id);
    } else {
      console.error('Channel deletionpch failed.');
    }
  };

  return (
    <Layout useBackdrop {...props} className={styles['layout']}>
      <ChannelNav
        user={user}
        isAdmin={isAdmin}
        channels={channels}
        activeChannel={activeChannel}
        onChannelCreate={handleCreate}
        onChannelDelete={handleDelete}
      />
      <div className={styles['timeline']}>{children}</div>
    </Layout>
  );
}
