import { Story, Meta } from '@storybook/react';
import ProjectSidebar from './project-sidebar';

export default {
  component: ProjectSidebar,
  title: 'waweb.app/ui.project-sidebar',
} as Meta;

const Template: Story = (args) => (
  <ProjectSidebar allCategories={[]} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
