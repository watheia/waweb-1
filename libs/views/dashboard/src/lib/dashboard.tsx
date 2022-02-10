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
    <div {...props} className="flex flex-col flex-1 w-full h-full mb-4">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        navigation={navigation}
      />

      <div className="flex flex-col flex-1 w-full h-full">
        <Header isMenuOpen={sidebarOpen} setMenuOpen={setSidebarOpen} />
        <div className="flex flex-col flex-1 w-full px-4 mx-auto space-y-2 max-w-7xl sm:px-6 md:px-8">
          <div className="flex flex-1 border-2 border-gray-500 border-dashed rounded-lg" />
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
