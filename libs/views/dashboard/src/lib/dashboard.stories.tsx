import { Story, Meta } from '@storybook/react';
import Dashboard from './dashboard';
// import { UiProvider } from '@waweb/app.ui.layout';

export default {
  component: Dashboard,
  title: 'waweb.views/dashboard',
} as Meta;

const Template: Story = (args) => <Dashboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
