import { Story, Meta } from '@storybook/react';
import CommentForm from './comment-form';

export default {
  component: CommentForm,
  title: 'waweb.app/ui.comment-form',
} as Meta;

const Template: Story = (args) => <CommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
