import { Story, Meta } from '@storybook/react';
import Support from './support';

export default {
  component: Support,
  title: 'waweb.app/ui.support',
} as Meta;

const Template: Story = (args) => <Support {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
