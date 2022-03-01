import { DivProps } from '@waweb/model';
import clsx from 'clsx';
import styles from './realtime.module.css';

/* eslint-disable-next-line */
export interface RealtimeProps extends DivProps {}

export function Realtime({ className, ...props }: RealtimeProps) {
  return (
    <div className={clsx(styles['root'], className)} {...props}>
      <h1>Welcome to Realtime!</h1>
    </div>
  );
}

export default Realtime;
