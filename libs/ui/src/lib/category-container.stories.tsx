import { Story, Meta } from '@storybook/react';
import CategoryContainer from './category-container';

export default {
  component: CategoryContainer,
  title: 'waweb.app/ui.category-container',
} as Meta;

const Template: Story = (args) => (
  <CategoryContainer
    category={{ name: 'test', slug: '/channel/test', articles: [] }}
    allCategories={[]}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
