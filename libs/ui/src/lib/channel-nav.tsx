import { AppRole, Channel, ChannelModel, DivProps, User } from '@waweb/model';
import Link from 'next/link';
import React, { useCallback } from 'react';
import styles from './channel-nav.module.css';
import TrashIcon from './icons/icon-trash';
import clsx from 'clsx';

export type SidebarItemProps = {
  channel: Channel;
  isActiveChannel: boolean;
  isAdmin: boolean;
  deleteChannel: (channel: Channel) => void;
};

const SidebarItem = ({
  channel,
  isActiveChannel,
  isAdmin,
  deleteChannel,
}: SidebarItemProps) => {
  return (
    <li className="flex items-center justify-between">
      <Link href="/channels/[id]" as={`/channels/${channel.id}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={isActiveChannel ? 'font-bold' : ''}>{channel.slug}</a>
      </Link>
      {channel.id !== BigInt(1) && isAdmin && (
        <button onClick={() => deleteChannel(channel)}>
          <TrashIcon />
        </button>
      )}
    </li>
  );
};

export interface ChannelNavProps extends DivProps {
  user: User | null;
  isAdmin: boolean;
  channels: ChannelModel[];
  activeChannelId: bigint;
  onChannelCreate: (name: string) => void;
  onChannelDelete: (channel: Channel) => void;
}

const ChannelNav = ({
  channels,
  activeChannelId,
  isAdmin,
  user,
  onChannelCreate: onCreate,
  onChannelDelete,
  className,
  ...props
}: ChannelNavProps) => {
  //wait for user to load before activating ui
  if (!user) return <div className={styles['channelnav']} />;

  return (
    <nav className={clsx(styles['channelnav'], className)} {...props}>
      <div className="p-2 ">
        <div className="p-2">{user.email}</div>
        <hr className="m-2" />
        <h4 className="font-bold">Channels</h4>
        <ul className="channel-list">
          {channels.map((x) => (
            <SidebarItem
              channel={x}
              key={x.id.toString()}
              isActiveChannel={x.id === activeChannelId}
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
