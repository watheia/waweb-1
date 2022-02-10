import { Menu, Transition } from '@headlessui/react';
import { storageUrl } from '@waweb/supabase';
import clsx from 'clsx';
import React, { Fragment } from 'react';

export interface NavItem {
  name: string;
  href: string;
}

const defaultItems = [
  { name: 'Profile', href: '/user/profile' },
  { name: 'Account', href: '/user/settings' },
  { name: 'Logout', href: '/user/signout' },
];

const UserMenu = ({ items = defaultItems }: { items?: NavItem[] }) => {
  const defaultAvatar = storageUrl('avatars', 'supabot.png');
  return (
    <Menu
      as="div"
      className="relative ml-3"
      style={{ minWidth: 32, minHeight: 32 }}
    >
      <div>
        <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src={defaultAvatar} alt="" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={clsx(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
