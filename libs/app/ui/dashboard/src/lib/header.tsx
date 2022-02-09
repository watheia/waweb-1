import { BellIcon, MenuAlt2Icon } from '@heroicons/react/outline';
import { DivProps } from '@waweb/model';
import React from 'react';
import SearchBar from './search-bar';
import UserMenu from './user-menu';

const userNavigation = [
  { name: 'Profile', href: '/user/profile' },
  { name: 'Account', href: '/user/settings' },
  { name: 'Logout', href: '/user/signout' },
];

interface HeaderProps extends DivProps {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ isMenuOpen, setMenuOpen, ...props }: HeaderProps) => (
  <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 shadow" {...props}>
    <button
      type="button"
      className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
      onClick={() => setMenuOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <MenuAlt2Icon className="w-6 h-6" aria-hidden="true" />
    </button>
    <div className="flex justify-between flex-1 px-4">
      <div className="flex flex-1">
        <SearchBar />
      </div>
      <div className="flex items-center ml-4 mr-16 md:ml-6">
        <button
          type="button"
          className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="w-6 h-6" aria-hidden="true" />
        </button>

        <UserMenu navigation={userNavigation} />
      </div>
    </div>
  </div>
);

export default Header;
