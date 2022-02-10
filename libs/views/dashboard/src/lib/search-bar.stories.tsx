import { Story, Meta } from '@storybook/react';
import SearchBar from './search-bar';

export default {
  component: SearchBar,
  title: 'waweb.views/dashboard/search-bar',
} as Meta;

const Template: Story = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
