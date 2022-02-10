import { Story, Meta } from '@storybook/react';
import Page from './page';

export default {
  component: Page,
  title: 'waweb.app/ui.page',
} as Meta;

const Template: Story = (args) => (
  <Page
    meta={{
      title: null,
      description: null,
      image: undefined,
      url: undefined,
    }}
    children={undefined}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
