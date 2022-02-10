import { Story, Meta } from '@storybook/react';
import UserMenu from './user-menu';

export default {
  component: UserMenu,
  title: 'waweb.views/dashboard/user-menu',
} as Meta;

const Template: Story = (args) => <UserMenu items={[]} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
