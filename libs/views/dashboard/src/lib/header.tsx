import { BellIcon, MenuAlt2Icon } from '@heroicons/react/outline';
import { DivProps } from '@waweb/model';
import React from 'react';
import SearchBar from './search-bar';
import UserMenu from './user-menu';

interface HeaderProps extends DivProps {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ isMenuOpen, setMenuOpen, ...props }: HeaderProps) => (
  <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 shadow" {...props}>
    <button
      type="button"
      className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
      onClick={() => setMenuOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
    </button>
    <div className="flex flex-1 justify-between px-4">
      <div className="flex flex-1">
        <SearchBar />
      </div>
      <div className="ml-4 mr-16 flex items-center md:ml-6">
        <button
          type="button"
          className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <UserMenu />
      </div>
    </div>
  </div>
);

export default Header;
