import { Story, Meta } from '@storybook/react';
import { Download } from '@waweb/icons';

export default {
  component: Download,
  title: 'waweb.icons/download',
} as Meta;

const Template: Story = (args) => <Download {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
