import { Story, Meta } from '@storybook/react';
import Form from './form';

export default {
  component: Form,
  title: 'waweb.app/ui.form',
} as Meta;

const Template: Story = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
