import { Story, Meta } from '@storybook/react';
import TasksGrid from './tasks-grid';

export default {
  component: TasksGrid,
  title: 'waweb.app/ui.tasks-grid',
} as Meta;

const Template: Story = (args) => <TasksGrid tasks={[]} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
