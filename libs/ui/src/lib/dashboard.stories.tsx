import { Story, Meta } from '@storybook/react';
import Dashboard from './dashboard';

export default {
  component: Dashboard,
  title: 'waweb.app/ui.dashboard',
} as Meta;

const Template: Story = (args) => (
  <Dashboard
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
    activeChannel={{
      id: BigInt(1),
      slug: 'public',
      created_by: '',
      inserted_at: new Date(),
    }}
    timeline={[]}
    navigation={[]}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
