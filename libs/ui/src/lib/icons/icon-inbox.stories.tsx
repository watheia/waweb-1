import { Story, Meta } from '@storybook/react';
import Inbox from './icon-inbox';

export default {
  component: Inbox,
  title: 'waweb.app/ui.icons/inbox',
} as Meta;

const Template: Story = (args) => <Inbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
