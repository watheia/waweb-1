import { Story, Meta } from '@storybook/react';
import AuthorSection from './author-section';

export default {
  component: AuthorSection,
  title: 'waweb.app/ui.author-section',
} as Meta;

const Template: Story = (args) => (
  <AuthorSection
    author={{ name: 'test', title: 'tester', slug: '/user/supabot' }}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
