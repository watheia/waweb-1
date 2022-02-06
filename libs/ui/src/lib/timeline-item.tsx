import { DivProps, MessageModel } from '@waweb/model';
import { ChatAltIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export interface MessageProps extends DivProps {
  item: MessageModel;
  isDeleteable: boolean;
}

const TimelineItem = ({ item, isDeleteable, className }: MessageProps) => {
  return (
    <div
      className={clsx(
        'bg-white/[.8] overflow-hidden shadow rounded-lg',
        className
      )}
    >
      <div className="p-2 flex">
        <div className="relative mr-4">
          <img
            className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
            src="https://www.datocms-assets.com/53041/1628748273-icon.png"
            alt=""
          />

          <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
            <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div>
            <div className="text-sm">
              <a href="#" className="font-medium text-gray-900">
                {item.author?.email}
              </a>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Commented {item.inserted_at}
            </p>
          </div>
          <div className="mt-2 text-sm text-gray-700">
            <p>{item.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
