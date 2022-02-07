import { Story, Meta } from '@storybook/react';
import HomeView from './home';

export default {
  component: HomeView,
  title: 'waweb.app/ui.home-view',
} as Meta;

const Template: Story = (args) => <HomeView {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
