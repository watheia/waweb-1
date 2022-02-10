import { Story, Meta } from '@storybook/react';
import Sidebar from './sidebar';

export default {
  component: Sidebar,
  title: 'waweb.views/dashboard/sidebar',
} as Meta;

const Template: Story = (args) => (
  <Sidebar
    isOpen={true}
    setIsOpen={function (open: boolean): void {
      throw new Error('Function not implemented.');
    }}
    navigation={[]}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
