import { Story, Meta } from '@storybook/react';
import MobileMenu from './mobile-menu';

export default {
  component: MobileMenu,
  title: 'waweb.app/ui.mobile-menu',
} as Meta;

const Template: Story = (args) => <MobileMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
