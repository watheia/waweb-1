import { Story, Meta } from '@storybook/react';
import StakeholdersGrid from './stakeholders-grid';

export default {
  component: StakeholdersGrid,
  title: 'waweb.app/ui.stakeholders-grid',
} as Meta;

const Template: Story = (args) => (
  <StakeholdersGrid stakeholders={[]} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
