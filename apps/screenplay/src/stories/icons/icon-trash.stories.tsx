import { Story, Meta } from '@storybook/react';
import { Trash } from '@waweb/icons';

export default {
  component: Trash,
  title: 'waweb.icons/trash',
} as Meta;

const Template: Story = (args) => (
  <Trash style={{ color: 'white' }} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
