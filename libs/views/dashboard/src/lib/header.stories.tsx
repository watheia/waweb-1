import { Story, Meta } from '@storybook/react';
import Header from './header';

export default {
  component: Header,
  title: 'waweb.views/dashboard/header',
} as Meta;

const Template: Story = (args) => (
  <Header
    isMenuOpen={true}
    setMenuOpen={function (open: boolean): void {
      throw new Error('Function not implemented.');
    }}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
