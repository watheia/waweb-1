import { Story, Meta } from '@storybook/react';
import LearnMore from './learn-more';

export default {
  component: LearnMore,
  title: 'waweb.app/ui.learn-more',
} as Meta;

const Template: Story = (args) => <LearnMore {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
