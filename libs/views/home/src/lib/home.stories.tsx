import { Story, Meta } from '@storybook/react';
import HomeView from './home';
import features from '../fixtures/features.json';
import posts from '../fixtures/posts.json';
import { HomeFeature } from '..';
import { Post } from '@waweb/model';

export default {
  component: HomeView,
  title: 'waweb.views/home',
} as Meta;

const Template: Story = (args) => (
  <HomeView
    features={features as HomeFeature[]}
    posts={posts as Post[]}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
