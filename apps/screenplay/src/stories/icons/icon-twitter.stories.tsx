import { Story, Meta } from '@storybook/react';
import { Twitter } from '@waweb/icons';

export default {
  component: Twitter,
  title: 'waweb.icons/twitter',
} as Meta;

const Template: Story = (args) => <Twitter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
