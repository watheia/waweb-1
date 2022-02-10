import { Story, Meta } from '@storybook/react';
import IconTwitter from './icon-twitter';

export default {
  component: IconTwitter,
  title: 'waweb.app/ui.icons/twitter',
} as Meta;

const Template: Story = (args) => <IconTwitter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
