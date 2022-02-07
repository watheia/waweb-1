import { Story, Meta } from '@storybook/react';
import Projects from './projects';

export default {
  component: Projects,
  title: 'waweb.app/ui.projects',
} as Meta;

const Template: Story = (args) => <Projects allCategories={[]} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
