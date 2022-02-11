import { Story, Meta } from '@storybook/react';
import { Check } from '@waweb/icons';

export default {
  component: Check,
  title: 'waweb.icons/check',
} as Meta;

const Template: Story = (args) => <Check {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
