import { Story, Meta } from '@storybook/react';
import { MockContent } from './mock-content';

export default {
  component: MockContent,
  title: 'MockContent',
} as Meta;

const Template: Story = (args) => <MockContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
