/**
 * Copyright 2022 Watheia Labs, LLC.
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

import { Category, CaseStudy } from '@waweb/model';
import cn from 'clsx';
import styles from './projects.module.css';
import ProjectCard from './project-card';

function CategoryRow({ stage }: { stage: Category }) {
  // Group projects by the time block
  const timeBlocks = stage.articles.reduce((allBlocks: any, caseStudy) => {
    allBlocks[caseStudy.start] = [
      ...(allBlocks[caseStudy.start] || []),
      caseStudy,
    ];
    return allBlocks;
  }, {});

  return (
    <div key={stage.name} className={styles['row']}>
      <h3 className={cn(styles['stage-name'], styles[stage.slug])}>
        <span>{stage.name}</span>
      </h3>
      <div className={cn(styles['projects'], styles[stage.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime].map(
              (caseStudy: CaseStudy, index: number) => (
                <ProjectCard
                  key={caseStudy.title}
                  project={caseStudy}
                  showTime={index === 0}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allCategories: Category[];
};

export default function Projects({ allCategories }: Props) {
  return (
    <div className={styles['container']}>
      <div className={styles['row-wrapper']}>
        {allCategories.map((stage) => (
          <CategoryRow key={stage.slug} stage={stage} />
        ))}
      </div>
    </div>
  );
}
