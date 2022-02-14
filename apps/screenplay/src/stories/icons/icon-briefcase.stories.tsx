import { Story, Meta } from '@storybook/react';
import { Briefcase } from '@waweb/icons';

export default {
  component: Briefcase,
  title: 'waweb.icons/briefcase',
} as Meta;

const Template: Story = (args) => (
  <div style={{ color: 'white' }}>
    <Briefcase {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
