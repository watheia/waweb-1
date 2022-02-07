import { Story, Meta } from '@storybook/react';
import Copy from './icon-copy';

export default {
  component: Copy,
  title: 'waweb.app/ui.icons/copy',
} as Meta;

const Template: Story = (args) => <Copy {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
