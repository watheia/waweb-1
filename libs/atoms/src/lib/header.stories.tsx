import { Story, Meta } from '@storybook/react';
import Header from './header';

export default {
  component: Header,
  title: 'waweb.app/ui.header',
} as Meta;

const Template: Story = (args) => (
  <Header hero={undefined} description={undefined} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
