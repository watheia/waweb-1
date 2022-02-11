import { Story, Meta } from '@storybook/react';
import AuthorsGrid from './authors-grid';

export default {
  component: AuthorsGrid,
  title: 'waweb.app/ui.authors-grid',
} as Meta;

const Template: Story = (args) => <AuthorsGrid authors={[]} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
