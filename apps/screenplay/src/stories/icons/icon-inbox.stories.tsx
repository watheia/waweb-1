import { Story, Meta } from '@storybook/react';
import { Inbox } from '@waweb/icons';

export default {
  component: Inbox,
  title: 'waweb.icons/inbox',
} as Meta;

const Template: Story = (args) => <Inbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
