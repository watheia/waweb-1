import { Story, Meta } from '@storybook/react';
import Hero from './hero';

export default {
  component: Hero,
  title: 'waweb.app/ui.hero',
} as Meta;

const Template: Story = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
