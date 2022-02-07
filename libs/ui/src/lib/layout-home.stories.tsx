import { Story, Meta } from '@storybook/react';
import LayoutDash from './layout-home';

export default {
  component: LayoutDash,
  title: 'waweb.app/ui.layout-dash',
} as Meta;

const Template: Story = (args) => (
  <LayoutDash
    user={{
      id: '',
      created_at: new Date().toLocaleDateString(),
      aud: '',
      email: '',
      user_metadata: {},
      app_metadata: {},
    }}
    userRoles={[]}
    channels={[]}
    activeChannel={null}
    children={undefined}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
