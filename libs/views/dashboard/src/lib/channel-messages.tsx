/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import { Fragment } from 'react';
import { ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { DivProps } from '@waweb/model';

export type Activity = Comment | Assignment | Tags;

export interface ActivityLink {
  name: string;
  href: string;
}

export interface Comment {
  id: number;
  type: 'comment';
  source: ActivityLink;
  date: string;
  comment: string;
  imageUrl: string;
}

export interface Assignment {
  id: number;
  type: 'assignment';
  source: ActivityLink;
  date: string;
  assigned: ActivityLink;
}

export interface Tags {
  id: number;
  type: 'tags';
  source: ActivityLink;
  date: string;
  tags: { name: string; href: string; color: string }[];
}

const activity: Activity[] = [
  {
    id: 1,
    type: 'comment',
    source: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    source: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    source: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'bg-rose-500' },
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    source: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChannelMessagesProps extends DivProps {}

export default function ChannelMessages({
  className,
  ...props
}: ChannelMessagesProps) {
  return (
    <div className={clsx('flow-root pr-8', className)} {...props}>
      <ul className="-mb-8">
        {activity.map((entry, index) => (
          <li key={entry.id}>
            <div className="relative pb-8">
              {index !== activity.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-500"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {entry.type === 'comment' ? (
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-4 ring-gray-500"
                        src={entry.imageUrl}
                        alt=""
                      />

                      <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                        <ChatAltIcon
                          className="h-5 w-5 text-gray-900"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a
                            href={entry.source.href}
                            className="font-medium text-gray-100"
                          >
                            {entry.source.name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-300">
                          Commented {entry.date}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-400">
                        <p>{entry.comment}</p>
                      </div>
                    </div>
                  </>
                ) : entry.type === 'assignment' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white">
                          <UserCircleIcon
                            className="h-6 w-6 text-gray-900"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-gray-300">
                        <a
                          href={entry.source.href}
                          className="font-medium text-gray-100"
                        >
                          {entry.source.name}
                        </a>{' '}
                        assigned{' '}
                        <a
                          href={entry.assigned.href}
                          className="font-medium text-gray-100"
                        >
                          {entry.assigned.name}
                        </a>{' '}
                        <span className="whitespace-nowrap">{entry.date}</span>
                      </div>
                    </div>
                  </>
                ) : entry.type === 'tags' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white">
                          <TagIcon
                            className="h-6 w-6 text-gray-900"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-sm leading-8 text-gray-300">
                        <span className="mr-0.5">
                          <a
                            href={entry.source.href}
                            className="font-medium text-gray-100"
                          >
                            {entry.source.name}
                          </a>{' '}
                          added tags
                        </span>{' '}
                        <span className="mr-0.5">
                          {entry.tags.map((tag) => (
                            <Fragment key={tag.name}>
                              <a
                                href={tag.href}
                                className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <span className="absolute flex flex-shrink-0 items-center justify-center">
                                  <span
                                    className={clsx(
                                      tag.color,
                                      'h-1.5 w-1.5 rounded-full'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="ml-3.5 font-medium text-gray-100">
                                  {tag.name}
                                </span>
                              </a>{' '}
                            </Fragment>
                          ))}
                        </span>
                        <span className="whitespace-nowrap">{entry.date}</span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
