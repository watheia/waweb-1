import { Story, Meta } from '@storybook/react';
import LayoutDash from './layout-dash';

export default {
  component: LayoutDash,
  title: 'waweb.app/ui.layout-dash',
} as Meta;

const Template: Story = (args) => (
  <LayoutDash user={null} userRoles={[]} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
