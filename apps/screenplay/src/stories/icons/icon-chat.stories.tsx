import { Story, Meta } from '@storybook/react';
import { Chat } from '@waweb/icons';

export default {
  component: Chat,
  title: 'waweb.icons/chat',
} as Meta;

const Template: Story = (args) => <Chat {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
