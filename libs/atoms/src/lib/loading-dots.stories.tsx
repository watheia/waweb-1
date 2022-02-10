import { Story, Meta } from '@storybook/react';
import LoadingDots from './loading-dots';

export default {
  component: LoadingDots,
  title: 'waweb.app/ui.loading-dots',
} as Meta;

const Template: Story = (args) => <LoadingDots {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
