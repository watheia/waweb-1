import icons from '@waweb/app.ui.icons';
import { Channel, DivProps, User } from '@waweb/model';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import styles from './channel-nav.module.css';

export type SidebarItemProps = {
  channel: Channel;
  isActive: boolean;
  isAdmin: boolean;
  deleteChannel: (channel: Channel) => void;
};

const SidebarItem = ({
  channel,
  isActive,
  isAdmin,
  deleteChannel,
}: SidebarItemProps) => {
  return (
    <li className="flex items-center justify-between">
      <Link href="/channel/[slug]" as={`/channel/${channel.slug}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={isActive ? 'font-bold' : ''}>{channel.slug}</a>
      </Link>
      {channel.slug !== 'public' && isAdmin && (
        <button onClick={() => deleteChannel(channel)}>
          <icons.Trash />
        </button>
      )}
    </li>
  );
};

export interface ChannelNavProps extends DivProps {
  user: User | null;
  isAdmin: boolean;
  channels: Channel[];
  activeChannel: Channel | null;
  onChannelCreate: (name: string) => void;
  onChannelDelete: (channel: Channel) => void;
}

const ChannelNav = ({
  channels,
  activeChannel,
  isAdmin,
  user,
  onChannelCreate: onCreate,
  onChannelDelete,
  className,
  ...props
}: ChannelNavProps) => {
  return (
    <nav className={clsx(styles['channelnav'], className)} {...props}>
      <div className="p-2 ">
        <div className="p-2">{user?.email}</div>
        <hr className="m-2" />
        <h4 className="font-bold">Channels</h4>
        <ul className="channel-list">
          {channels.map((x) => (
            <SidebarItem
              channel={x}
              key={x.id.toString()}
              isActive={x.id === activeChannel?.id}
              isAdmin={isAdmin}
              deleteChannel={onChannelDelete}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ChannelNav;
