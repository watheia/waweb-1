import { Story, Meta } from '@storybook/react';
import Gatekeeper from './gatekeeper';

export default {
  component: Gatekeeper,
  title: 'waweb.views/gatekeeper',
} as Meta;

const Template: Story = (args) => (
  <Gatekeeper onLogin={() => void 0} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
