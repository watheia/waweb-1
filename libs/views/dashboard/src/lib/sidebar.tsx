import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import React, { Fragment } from 'react';
import { Logo } from '@waweb/atoms';
import { DivProps } from '@waweb/model';
import { ChannelNav } from './ChannelNav';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface SidebarProps extends DivProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navigation: ChannelNav[];
}

export interface SidebarItemProps {
  name: string;
  slug: string;
  isActive: boolean;
  icon: any;
}

const SidebarItem = ({
  name,
  slug,
  isActive,
  icon: Icon,
}: SidebarItemProps) => {
  return (
    <Link href={slug}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        key={name}
        className={clsx(
          isActive
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
          'group flex items-center rounded-md px-2 py-2 text-base font-medium shadow-inner'
        )}
      >
        <Icon
          className={clsx(
            isActive
              ? 'text-gray-500'
              : 'text-gray-400 group-hover:text-gray-500',
            'mr-4 h-6 w-6 flex-shrink-0'
          )}
          aria-hidden="true"
        />
        {name}
      </a>
    </Link>
  );
};

const Sidebar = ({ isOpen = false, setIsOpen, navigation }: SidebarProps) => {
  const router = useRouter();
  const currentPath = router?.asPath ?? '/';
  const isActiveItem = (item: ChannelNav) => currentPath.startsWith(item.slug);
  return (
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
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
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
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            <div className="flex flex-shrink-0 items-center px-4">
              <Logo alternate />
            </div>
            <div className="mt-5 h-0 flex-1 overflow-y-auto">
              <nav className="space-y-1 px-2">
                {navigation.map((item, index) => (
                  <SidebarItem
                    key={index}
                    {...item}
                    isActive={isActiveItem(item)}
                  />
                ))}
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className="w-14 flex-shrink-0" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Sidebar;