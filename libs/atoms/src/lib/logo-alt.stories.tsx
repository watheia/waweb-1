import { Story, Meta } from '@storybook/react';
import LogoAlt from './logo-alt';

export default {
  component: LogoAlt,
  title: 'waweb.ui/logo-alt',
} as Meta;

const Template: Story = (args) => <LogoAlt {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
