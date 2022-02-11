import { Story, Meta } from '@storybook/react';
import { Avatar } from '@waweb/icons';

export default {
  component: Avatar,
  title: 'waweb.icons/avatar',
} as Meta;

const Template: Story = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
