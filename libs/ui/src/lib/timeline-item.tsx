import { DivProps, MessageModel } from '@waweb/model';
import clsx from 'clsx';

export interface MessageProps extends DivProps {
  item: MessageModel;
  deleteEnabled: boolean;
}

const TimelineItem = ({ item, deleteEnabled, className }: MessageProps) => {
  return (
    <div
      className={clsx(
        'bg-white/[.9] overflow-hidden shadow rounded-lg',
        className
      )}
    >
      <div className="flex p-2">
        <div className="relative mr-4">
          <img
            className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full ring-2 ring-white"
            src="https://www.datocms-assets.com/53041/1628748273-icon.png"
            alt=""
          />
        </div>
        <div className="flex-1 min-w-0">
          <div>
            <div className="text-sm">
              <a href="#" className="font-medium text-gray-900">
                {item.author?.email ?? 'supabot'}
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
