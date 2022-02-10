import { Story, Meta } from '@storybook/react';
import { MessageInput } from './message-input';

export default {
  component: MessageInput,
  title: 'MessageInput',
} as Meta;

const Template: Story = (args) => <MessageInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
