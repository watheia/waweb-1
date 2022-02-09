import { Story, Meta } from '@storybook/react';
import Avatar from './icon-avatar';

export default {
  component: Avatar,
  title: 'waweb.app/ui.icons/avatar',
} as Meta;

const Template: Story = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
