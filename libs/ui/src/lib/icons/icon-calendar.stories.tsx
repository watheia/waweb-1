import { Story, Meta } from '@storybook/react';
import Calendar from './icon-calendar';

export default {
  component: Calendar,
  title: 'waweb.app/ui.icons/calendar',
} as Meta;

const Template: Story = (args) => <Calendar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
