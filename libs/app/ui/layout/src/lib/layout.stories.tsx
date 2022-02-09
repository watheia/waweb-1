import { Story, Meta } from '@storybook/react';
import Layout from './layout';
import MockContent from '@waweb/ui.mock-content';

export default {
  component: Layout,
  title: 'waweb.app/ui/layout',
} as Meta;

const Template: Story = (args) => (
  <Layout {...args}>
    <MockContent />
  </Layout>
);

export const Defaults = Template.bind({});
Defaults.args = {};

export const WithBackdrop = Template.bind({});
WithBackdrop.args = {
  useBackdrop: true,
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  usePadding: true,
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  hideNav: true,
};
