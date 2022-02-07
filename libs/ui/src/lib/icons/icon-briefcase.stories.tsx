import { Story, Meta } from '@storybook/react';
import Briefcase from './icon-briefcase';

export default {
  component: Briefcase,
  title: 'waweb.app/ui.icons/briefcase',
} as Meta;

const Template: Story = (args) => <Briefcase {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
