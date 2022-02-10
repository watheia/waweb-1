import { Story, Meta } from '@storybook/react';
import Check from './icon-check';

export default {
  component: Check,
  title: 'waweb.app/ui.icons/check',
} as Meta;

const Template: Story = (args) => <Check {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
