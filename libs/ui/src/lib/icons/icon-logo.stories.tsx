import { Story, Meta } from '@storybook/react';
import Logo from './icon-logo';

export default {
  component: Logo,
  title: 'waweb.app/ui.icons/logo',
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
