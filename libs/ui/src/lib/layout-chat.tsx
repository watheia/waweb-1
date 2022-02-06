import { useAuth } from '@waweb/auth';
import { AppRole, Channel, Children, DivProps } from '@waweb/model';
import { addChannel, deleteChannel } from '@waweb/store';
import slugify from '@waweb/util.slugify';
import ChannelNav from './channel-nav';
import Layout from './layout';
import styles from './layout-chat.module.css';

export interface LayoutChatProps extends DivProps {
  channels: Channel[];
  activeChannelId: bigint;
  children: Children;
}

export default function LayoutChat({
  channels,
  activeChannelId,
  children,
  ...props
}: LayoutChatProps) {
  const { user, userRoles } = useAuth();
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
      // channel is not default
      channel.id > BigInt(1) &&
      // user is admin or owner of channel
      (isAdmin || channel.created_by === user.id)
    ) {
      deleteChannel(channel.id);
    } else {
      console.error('Channel deletionpch failed.');
    }
  };

  return (
    <Layout useBackdrop {...props} className={styles['root']}>
      <ChannelNav
        user={user}
        isAdmin={isAdmin}
        channels={[]}
        activeChannelId={BigInt(1)}
        onChannelCreate={handleCreate}
        onChannelDelete={handleDelete}
      />
      <div className={styles['chat']}>{children}</div>
    </Layout>
  );
}
