import { Story, Meta } from '@storybook/react';
import TimelineItem from './timeline-item';

export default {
  component: TimelineItem,
  title: 'waweb.app/ui.timeline-item',
} as Meta;

const Template: Story = (args) => (
  <TimelineItem
    item={{
      id: BigInt(1),
      inserted_at: new Date(),
      message: 'Message text',
      user_id: '',
      channel_id: BigInt(1),
    }}
    deleteEnabled={false}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
