import { DivProps } from '@waweb/model';
import clsx from 'clsx';
import styles from './realtime.module.css';
import { styleUtils } from '@waweb/atoms';

/* eslint-disable-next-line */
export interface RealtimeProps extends DivProps {}

export function Realtime({ className, ...props }: RealtimeProps) {
  return (
    <div className={clsx(styles['root'], className)} {...props}>
      <h1
        className={clsx(
          styleUtils['appear'],
          styleUtils['appear-third'],
          styles['hero']
        )}
      >
        Watheia
        <br className={styleUtils['show-on-mobile']} /> Realtime
      </h1>
    </div>
  );
}

export default Realtime;
