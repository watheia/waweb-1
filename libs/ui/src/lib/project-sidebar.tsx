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

import { Category } from '@waweb/model';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './schedule-sidebar.module.css';
import Select from './select';
import ProjectCard from './project-card';

type Props = {
  allCategories: Category[];
};

export default function ProjectSidebar({ allCategories }: Props) {
  const router = useRouter();
  const [currentCategorySlug, setCurrentCategorySlug] = useState(
    router.query['slug']
  );
  const currentCategory = allCategories.find(
    (s: Category) => s.slug === currentCategorySlug
  );

  useEffect(() => {
    setCurrentCategorySlug(router.query['slug']);
  }, [router.query]);

  return (
    <div className={styles['schedule']}>
      <h3 className={styles['header']}>Schedule</h3>
      <p>Jan 1</p>
      <Select
        aria-label="Select a stage"
        value={currentCategorySlug}
        onChange={(e) => {
          const slug = e.target.value;
          setCurrentCategorySlug(slug);
          router.push(`/stage/${slug}`);
        }}
      >
        {allCategories.map((stage) => (
          <option key={stage.slug} value={stage.slug}>
            {stage.name}
          </option>
        ))}
      </Select>
      <div className={styles['projects']}>
        {currentCategory?.articles.map((caseStudy) => (
          <ProjectCard key={caseStudy.title} caseStudy={caseStudy} showTime />
        ))}
      </div>
    </div>
  );
}
