import { Story, Meta } from '@storybook/react';
import Logo from './logo';

export default {
  component: Logo,
  title: 'waweb.app/ui/logo',
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
