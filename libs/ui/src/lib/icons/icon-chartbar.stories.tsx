import { Story, Meta } from '@storybook/react';
import Chartbar from './icon-chartbar';

export default {
  component: Chartbar,
  title: 'waweb.app/ui.icons/chartbar',
} as Meta;

const Template: Story = (args) => <Chartbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
