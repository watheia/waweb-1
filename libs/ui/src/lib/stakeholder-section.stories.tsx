import { Story, Meta } from '@storybook/react';
import StakeholderSection from './stakeholder-section';

export default {
  component: StakeholderSection,
  title: 'waweb.app/ui.stakeholders-section',
} as Meta;

const Template: Story = (args) => (
  <StakeholderSection
    stakeholder={{
      name: 'Name',
      description: 'Description',
      slug: 'test',
      links: [],
    }}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
