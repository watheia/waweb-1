/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TicketGenerationState } from 'model/src';
import TicketColored from './ticket-colored';
import TicketColoredMobile from './ticket-colored-mobile';
import TicketInfo from './ticket-info';
import TicketMono from './ticket-mono';
import TicketMonoMobile from './ticket-mono-mobile';
import TicketNumber from './ticket-number';
import TicketProfile from './ticket-profile';
import styles from './ticket-visual.module.css';

type Props = {
  size?: number;
  name?: string;
  ticketNumber?: number;
  username?: string;
  ticketGenerationState?: TicketGenerationState;
};

export default function TicketVisual({
  size = 1,
  name,
  username,
  ticketNumber,
  ticketGenerationState = 'default',
}: Props) {
  return (
    <div className={styles['visual']} style={{ ['--size' as string]: size }}>
      <div className={styles['horizontal-ticket']}>
        {username ? <TicketColored /> : <TicketMono />}
      </div>
      <div className={styles['vertical-ticket']}>
        {username ? <TicketColoredMobile /> : <TicketMonoMobile />}
      </div>
      <div className={styles['profile']}>
        <TicketProfile
          name={name}
          username={username}
          size={size}
          ticketGenerationState={ticketGenerationState}
        />
      </div>
      <div className={styles['info']}>
        <TicketInfo
          logoTextSecondaryColor={ticketNumber ? 'var(--brand)' : undefined}
        />
      </div>
      {ticketNumber && (
        <div className={styles['ticket-number-wrapper']}>
          <div className={styles['ticket-number']}>
            <TicketNumber number={ticketNumber} />
          </div>
        </div>
      )}
    </div>
  );
}
