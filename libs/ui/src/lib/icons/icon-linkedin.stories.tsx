import { Story, Meta } from '@storybook/react';
import Linkedin from './icon-linkedin';

export default {
  component: Linkedin,
  title: 'waweb.app/ui.icons/linkedin',
} as Meta;

const Template: Story = (args) => <Linkedin {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
