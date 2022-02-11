import { DivProps } from '@waweb/model';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './profile-view.module.css';

/* eslint-disable-next-line */
export interface ProfileViewProps extends DivProps {}

export function ProfileView({ className, ...props }: ProfileViewProps) {
  return (
    <div className={clsx(styles['root'], className)}>
      <h1>Welcome to ProfileView!</h1>

      <ul>
        <li>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>views-profile root</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileView;
