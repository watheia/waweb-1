import { Story, Meta } from '@storybook/react';
import AppEntry from './app-entry';

export default {
  component: AppEntry,
  title: 'waweb.app/ui.app-entry',
} as Meta;

const Template: Story = (args) => (
  <AppEntry
    onLogin={function (): void {
      throw new Error('Function not implemented.');
    }}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
