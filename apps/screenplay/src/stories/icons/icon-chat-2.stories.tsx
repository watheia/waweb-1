import { Story, Meta } from '@storybook/react';
import { Chat2 } from '@waweb/icons';

export default {
  component: Chat2,
  title: 'waweb.icons/chat-2',
} as Meta;

const Template: Story = (args) => <Chat2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
