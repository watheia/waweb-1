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
    <div {...props}>
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        navigation={navigation}
      />

      <div className="flex flex-col flex-1">
        <Header isMenuOpen={sidebarOpen} setMenuOpen={setSidebarOpen} />
        <div className="flex-1">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {children ?? (
              <div className="border-2 border-gray-700 border-dashed rounded-lg h-96" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
