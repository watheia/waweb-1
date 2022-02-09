import { Story, Meta } from '@storybook/react';
import TrashIcon from './icon-trash';

export default {
  component: TrashIcon,
  title: 'waweb.app/ui.icons/trash',
} as Meta;

const Template: Story = (args) => <TrashIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
