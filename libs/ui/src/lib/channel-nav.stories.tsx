import { Story, Meta } from '@storybook/react';
import { Channel } from '@waweb/model';
import ChannelNav from './channel-nav';

export default {
  component: ChannelNav,
  title: 'waweb.app/ui.channel-nav',
} as Meta;

const Template: Story = (args) => (
  <ChannelNav
    user={null}
    isAdmin={false}
    channels={[]}
    activeChannel={null}
    onChannelCreate={function (name: string): void {
      throw new Error('Function not implemented.');
    }}
    onChannelDelete={function (channel: Channel): void {
      throw new Error('Function not implemented.');
    }}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
