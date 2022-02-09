import { Story, Meta } from '@storybook/react';
import Github from './icon-github';

export default {
  component: Github,
  title: 'waweb.app/ui.icons/github',
} as Meta;

const Template: Story = (args) => <Github {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
