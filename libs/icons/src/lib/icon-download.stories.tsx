import { Story, Meta } from '@storybook/react';
import Download from './icon-download';

export default {
  component: Download,
  title: 'waweb.app/ui.icons/download',
} as Meta;

const Template: Story = (args) => <Download {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
