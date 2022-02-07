import { Story, Meta } from '@storybook/react';
import Layout from './layout';

export default {
  component: Layout,
  title: 'waweb.app/ui.layout',
} as Meta;

const Template: Story = (args) => <Layout children={undefined} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
