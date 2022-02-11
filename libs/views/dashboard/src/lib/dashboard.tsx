/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { DivProps } from '@waweb/model';
import { MessageInput } from '@waweb/atoms';
import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import ChannelMessages from './channel-messages';

const navigation = [
  { name: 'Messageboard', slug: '/', icon: HomeIcon, current: true },
  { name: 'Team', slug: '#', icon: UsersIcon, current: false },
  { name: 'Projects', slug: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', slug: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', slug: '#', icon: InboxIcon, current: false },
  { name: 'Reports', slug: '#', icon: ChartBarIcon, current: false },
];

export type DashboardProps = DivProps;

export const Dashboard = ({ children, ...props }: DashboardProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div {...props} className="mb-4 flex h-full w-full flex-1 flex-col">
      {/* <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        navigation={navigation}
      /> */}

      <div className="flex h-full w-full flex-1 flex-col">
        <Header isMenuOpen={sidebarOpen} setMenuOpen={setSidebarOpen} />
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col space-y-12 px-4 sm:px-6 md:px-8">
          <ChannelMessages className="pt-6" />
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
