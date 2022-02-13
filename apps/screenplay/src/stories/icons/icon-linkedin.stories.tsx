import { Story, Meta } from '@storybook/react';
import { Linkedin } from '@waweb/icons';

export default {
  component: Linkedin,
  title: 'waweb.icons/linkedin',
} as Meta;

const Template: Story = (args) => (
  <Linkedin style={{ color: 'white' }} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
