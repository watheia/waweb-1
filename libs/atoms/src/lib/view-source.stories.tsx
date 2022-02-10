import { Story, Meta } from '@storybook/react';
import ViewSource from './view-source';

export default {
  component: ViewSource,
  title: 'waweb.app/ui/view-source',
} as Meta;

const Template: Story = (args) => <ViewSource {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
