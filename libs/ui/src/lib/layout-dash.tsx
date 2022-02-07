import React from 'react';
import { AppRole, DivProps, User } from '@waweb/model';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  BriefcaseIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  InboxIcon,
  MenuAlt2Icon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import Layout from './layout';
import LogoAlt from './logo-alt';

const navigation: NavItem[] = [
  {
    name: 'Public Chat',
    href: '/channel/public',
    icon: ChatAlt2Icon,
    current: true,
  },
  {
    name: 'Announcements',
    href: '/channel/announcements',
    icon: ChatAltIcon,
    current: false,
  },
  {
    name: 'Project Updates',
    href: '/channel/updates',
    icon: BriefcaseIcon,
    current: false,
  },
  {
    name: 'Timeline',
    href: '/channel/timeline',
    icon: CalendarIcon,
    current: false,
  },
  {
    name: 'Ledger',
    href: '/channel/ledger',
    icon: InboxIcon,
    current: false,
  },
  {
    name: 'Reports',
    href: '/channel/reports',
    icon: ChartBarIcon,
    current: false,
  },
];

const userNavigation: NavItem[] = [
  { name: 'Profile', href: '/user/profile' },
  { name: 'Account', href: '/user/settings' },
  { name: 'Logout', href: '/user/signout' },
];

const SearchBar = () => (
  <div className="flex-1 min-w-0 md:px-8 lg:px-0 xl:col-span-6">
    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
      <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-gray-900 border border-gray-700 rounded-md opacity-75 focus:opacity-100 focus:outline-none focus:text-gray-200 focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            style={{ minWidth: '120px' }}
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </div>
  </div>
);

interface MobileSidebarProps extends DivProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navigation: NavItem[];
}

const MobileSidebar = ({
  isOpen = false,
  setIsOpen,
  navigation,
}: MobileSidebarProps) => (
  <Transition.Root show={isOpen} as={Fragment}>
    <Dialog as="div" className="fixed inset-0 z-40 flex" onClose={setIsOpen}>
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute top-0 right-0 pt-2 -mr-12">
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </Transition.Child>
          <div className="flex items-center flex-shrink-0 px-4">
            <LogoAlt />
          </div>
          <div className="flex-1 h-0 mt-5 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md shadow-inner'
                  )}
                >
                  <item.icon
                    className={clsx(
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-4 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Transition.Child>
      <div className="flex-shrink-0 w-14" aria-hidden="true">
        {/* Dummy element to force sidebar to shrink to fit close icon */}
      </div>
    </Dialog>
  </Transition.Root>
);

const PrincipalUserMenu = ({ navigation }: { navigation: NavItem[] }) => (
  <Menu
    as="div"
    className="relative ml-3"
    style={{ minWidth: 32, minHeight: 32 }}
  >
    <div>
      <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          alt=""
        />
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
        {navigation.map((item) => (
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

interface DashHeaderProps extends DivProps {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navigation: NavItem[];
}

const DashHeader = ({ setMenuOpen, ...props }: DashHeaderProps) => (
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

        {/* Profile dropdown */}
        <PrincipalUserMenu navigation={userNavigation} />
      </div>
    </div>
  </div>
);

export interface NavItem {
  name: string;
  href: string;
  icon?: any;
  current?: boolean;
}

export interface LayoutDashProps extends DivProps {
  user: User | null;
  userRoles: AppRole[];
  title?: string;
}

export default function LayoutDash({
  className,
  children,
  title,
  ...props
}: LayoutDashProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout useBackdrop hideNav>
      <MobileSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        navigation={navigation}
      />

      <div className="flex flex-col flex-1">
        <DashHeader
          isMenuOpen={sidebarOpen}
          setMenuOpen={setSidebarOpen}
          navigation={navigation}
        />

        <div className="flex-1">
          {title && (
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-300">{title}</h1>
            </div>
          )}
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              {children ?? (
                <div className="border-2 border-gray-700 border-dashed rounded-lg h-96" />
              )}
            </div>
            {/* /End replace */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
