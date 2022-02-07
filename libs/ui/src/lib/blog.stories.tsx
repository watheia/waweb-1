import { Story, Meta } from '@storybook/react';
import Blog from './blog';

export default {
  component: Blog,
  title: 'waweb.app/ui.blog',
} as Meta;

const Template: Story = (args) => <Blog {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
