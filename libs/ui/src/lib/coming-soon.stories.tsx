import { Story, Meta } from '@storybook/react';
import ComingSoon from './coming-soon';

export default {
  component: ComingSoon,
  title: 'waweb.app/ui.coming-soon',
} as Meta;

const Template: Story = (args) => <ComingSoon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
