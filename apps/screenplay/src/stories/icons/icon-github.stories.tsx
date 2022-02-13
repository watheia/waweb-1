import { Story, Meta } from '@storybook/react';
import { Github } from '@waweb/icons';

export default {
  component: Github,
  title: 'waweb.icons/github',
} as Meta;

const Template: Story = (args) => <Github color="white" {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
