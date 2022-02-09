import { Story, Meta } from '@storybook/react';
import Chat from './icon-chat';

export default {
  component: Chat,
  title: 'waweb.app/ui.icons/chat',
} as Meta;

const Template: Story = (args) => <Chat {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
