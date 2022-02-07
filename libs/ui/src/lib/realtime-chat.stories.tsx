import { Story, Meta } from '@storybook/react';
import RealtimeChat from './realtime-chat';

export default {
  component: RealtimeChat,
  title: 'waweb.app/ui.realtime-chat',
} as Meta;

const Template: Story = (args) => <RealtimeChat {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
