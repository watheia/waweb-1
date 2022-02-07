import { Story, Meta } from '@storybook/react';
import Gatekeeper from './gatekeeper';

export default {
  component: Gatekeeper,
  title: 'waweb.app/ui.gatekeeper',
} as Meta;

const Template: Story = (args) => <Gatekeeper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
