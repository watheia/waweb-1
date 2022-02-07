import { Story, Meta } from '@storybook/react';
import Select from './select';

export default {
  component: Select,
  title: 'waweb.app/ui.select',
} as Meta;

const Template: Story = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
