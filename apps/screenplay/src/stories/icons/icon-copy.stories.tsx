import { Story, Meta } from '@storybook/react';
import { Copy } from '@waweb/icons';

export default {
  component: Copy,
  title: 'waweb.icons/copy',
} as Meta;

const Template: Story = (args) => <Copy style={{ color: 'white' }} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
