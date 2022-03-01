import { DivProps } from '@waweb/model';
import styles from './coming-soon.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import config from '@waweb/config';
import { Logo } from '@waweb/atoms';

export interface ComingSoonProps extends DivProps {
  issueNum: string;
}

const trackingUrl = (ticket: string) => `${config.repo}/issues/${ticket}`;

export function ComingSoon({ className, issueNum, ...props }: ComingSoonProps) {
  return (
    <div className={clsx(styles['root'], className)}>
      <div className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center flex-shrink-0">
          <a href="/" className="inline-flex">
            <Logo width={320} height={110} priority={false} />
          </a>
        </div>
        <div className="py-8">
          <div className="text-center">
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl">
              Please stand by.
            </h1>
            <p className="max-w-xs mx-auto mt-2 text-base text-gray-400">
              Please be patient while we complete the required functionality for
              this page.
            </p>
            <div className="mt-6">
              <Link href={trackingUrl(issueNum)}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className="text-base font-medium text-teal-600 hover:text-teal-500"
                  target="_blank"
                >
                  Ticket #{issueNum.padStart(4, '0')}
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
