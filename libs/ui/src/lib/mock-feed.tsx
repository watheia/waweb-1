import { Fragment } from 'react';
import { ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { DivProps } from '@waweb/model';

export type ActivityType = 'comment' | 'assignment' | 'tags';

export type ActivityItem = {
  name: string;
  href: string;
  color?: number | string;
};

export interface Activity {
  id: number;
  type: ActivityType;
  date: string;
  source: ActivityItem;
}

export interface Comment extends Activity {
  imageUrl: string;
  comment: string;
}

export interface Assignment extends Activity {
  assigned: ActivityItem;
}

export interface Tags extends Activity {
  tags: ActivityItem[];
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
  } as Comment,
  {
    id: 2,
    type: 'assignment',
    source: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  } as Assignment,
  {
    id: 3,
    type: 'tags',
    source: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'bg-rose-500' },
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  } as Tags,
  {
    id: 4,
    type: 'comment',
    source: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  } as Comment,
];

const ActivityPanel = ({ children, className, ...props }: DivProps) => (
  <div
    className={clsx(
      'bg-white/[.8] overflow-hidden shadow rounded-lg',
      className
    )}
    {...props}
  >
    <div className="p-2 flex">{children}</div>
  </div>
);

const CommentActivity = ({ item }: { item: Comment }) => (
  <ActivityPanel>
    <div className="relative mr-4">
      <img
        className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
        src={item.imageUrl}
        alt=""
      />

      <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
        <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </span>
    </div>
    <div className="min-w-0 flex-1">
      <div>
        <div className="text-sm">
          <a href={item.source.href} className="font-medium text-gray-900">
            {item.source.name}
          </a>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Commented {item.date}</p>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        <p>{item.comment}</p>
      </div>
    </div>
  </ActivityPanel>
);

const AssignmentActivity = ({ item }: { item: Assignment }) => (
  <ActivityPanel>
    <div className="mr-4">
      <div className="relative px-1">
        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
          <UserCircleIcon
            className="h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
    <div className="min-w-0 flex-1 py-1.5">
      <div className="text-sm text-gray-500">
        <a href={item.source.href} className="font-medium text-gray-900">
          {item.source.name}
        </a>{' '}
        assigned{' '}
        <a href={item.assigned.href} className="font-medium text-gray-900">
          {item.assigned.name}
        </a>{' '}
        <span className="whitespace-nowrap">{item.date}</span>
      </div>
    </div>
  </ActivityPanel>
);

const TagsActivity = ({ item }: { item: Tags }) => (
  <ActivityPanel>
    <div className="mr-4">
      <div className="relative px-1">
        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
          <TagIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div className="min-w-0 flex-1 py-0">
      <div className="text-sm leading-8 text-gray-500">
        <span className="mr-0.5">
          <a href={item.source.href} className="font-medium text-gray-900">
            {item.source.name}
          </a>{' '}
          added tags
        </span>{' '}
        <span className="mr-0.5">
          {item.tags?.map((tag) => (
            <Fragment key={tag.name}>
              <a
                href={tag.href}
                className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
              >
                <span className="absolute flex-shrink-0 flex items-center justify-center">
                  <span
                    className={clsx(tag.color, 'h-1.5 w-1.5 rounded-full')}
                    aria-hidden="true"
                  />
                </span>
                <span className="ml-3.5 font-medium text-gray-900">
                  {tag.name}
                </span>
              </a>{' '}
            </Fragment>
          ))}
        </span>
        <span className="whitespace-nowrap">{item.date}</span>
      </div>
    </div>
  </ActivityPanel>
);

export default function MockFeed() {
  return (
    <div className="flow-root">
      <ul className="-mb-4">
        {activity.map((item, index) => (
          <li key={item.id}>
            <div className="relative pb-4">
              {index !== activity.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-700"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-1">
                {item.type === 'comment' ? (
                  <CommentActivity item={item as Comment} />
                ) : item.type === 'assignment' ? (
                  <AssignmentActivity item={item as Assignment} />
                ) : item.type === 'tags' ? (
                  <TagsActivity item={item as Tags} />
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
