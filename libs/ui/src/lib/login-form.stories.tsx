import { Story, Meta } from '@storybook/react';
import LoginForm from './login-form';

export default {
  component: LoginForm,
  title: 'waweb.app/ui.login-form',
} as Meta;

const Template: Story = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
