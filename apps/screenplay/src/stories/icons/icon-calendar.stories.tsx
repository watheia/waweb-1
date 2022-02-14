import { Story, Meta } from '@storybook/react';
import { Calendar } from '@waweb/icons';

export default {
  component: Calendar,
  title: 'waweb.icons/calendar',
} as Meta;

const Template: Story = (args) => (
  <div style={{ color: 'white' }}>
    <Calendar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
