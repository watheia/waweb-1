import { Story, Meta } from '@storybook/react';
import { ChartBar } from '@waweb/icons';

export default {
  component: ChartBar,
  title: 'waweb.icons/chartbar',
} as Meta;

const Template: Story = (args) => (
  <ChartBar style={{ color: 'white' }} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
