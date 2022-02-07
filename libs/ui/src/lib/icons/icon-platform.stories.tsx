import { Story, Meta } from '@storybook/react';
import Platform from './icon-platform';

export default {
  component: Platform,
  title: 'waweb.app/ui.icons/platform',
} as Meta;

const Template: Story = (args) => <Platform {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
