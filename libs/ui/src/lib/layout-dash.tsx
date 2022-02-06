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
  { name: 'Your Profile', href: '/user/profile' },
  { name: 'Settings', href: '/user/settings' },
  { name: 'Sign out', href: '/user/signout' },
];

const SearchBar = () => (
  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
      <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full bg-gray-900 border border-gray-700 opacity-75 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:opacity-100 focus:outline-none focus:text-gray-200 focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
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
    <Dialog as="div" className="fixed inset-0 flex z-40" onClose={setIsOpen}>
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
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 flex items-center px-4">
            <LogoAlt />
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
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
  <Menu as="div" className="ml-3 relative">
    <div>
      <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
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
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
  title = 'Watheia Realtime | Home',
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
      {/* <StaticSidebar navigation={navigation} /> */}

      <div className="flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <SearchBar />
            </div>
            <div className="ml-4 flex items-center md:ml-6 mr-16">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <PrincipalUserMenu navigation={userNavigation} />
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-300">{title}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                {children ?? (
                  <div className="border-2 border-dashed border-gray-700 rounded-lg h-96" />
                )}
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
