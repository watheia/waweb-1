/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MessageInput } from '@waweb/atoms';
import { DivProps } from '@waweb/model';
import ChannelMessages from './channel-messages';

export type DashboardProps = DivProps;

export const Dashboard = ({ children, ...props }: DashboardProps) => (
  <div
    className="mx-auto flex w-full max-w-7xl flex-1 flex-col space-y-12 px-4 sm:px-6 md:px-8"
    {...props}
  >
    <ChannelMessages className="pt-6" />
    <MessageInput />
  </div>
);

export default Dashboard;
