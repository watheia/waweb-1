import { Story, Meta } from '@storybook/react';
import ProjectCard from './project-card';

export default {
  component: ProjectCard,
  title: 'waweb.app/ui.projects-card',
} as Meta;

const Template: Story = (args) => (
  <ProjectCard
    key={'key'}
    project={{
      title: 'title',
      description: 'description',
      start: 'Jan 1, 2022',
      end: 'Jan 31, 2022',
      stakeholders: [{ name: 'supabot', title: 'Title', slug: 'supabot' }],
    }}
    showTime={false}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
