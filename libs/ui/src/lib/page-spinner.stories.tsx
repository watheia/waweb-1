import { Story, Meta } from '@storybook/react';
import PageSpinner from './page-spinner';

export default {
  component: PageSpinner,
  title: 'waweb.app/ui.page-spinner',
} as Meta;

const Template: Story = (args) => <PageSpinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
