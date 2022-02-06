/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useAuth } from '@waweb/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Container from './container';
import Form from './form';
import Hero from './hero';
import Layout from './layout';
import LearnMore from './learn-more';
import PageSpinner from './page-spinner';

// const HeroContent = () => (

// );

// const UserContent = () => {
//   const router = useRouter();
//   const { user } = useAuth();
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   // Else load up the page
//   const { id } = router.query;
//   let channelId = BigInt(1);
//   if (typeof id === 'string') {
//     channelId = BigInt(id);
//   }

//   const { messages, channels } = useStore({ channelId });
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       block: 'start',
//       behavior: 'smooth',
//     });
//   }, [messages]);

//   // redirect to public channel when current channel is deleted
//   useEffect(() => {
//     if (!channels.some((channel) => channel.id === BigInt(channelId))) {
//       router.push('/channels/1');
//     }
//   }, [channels, channelId, router]);

//   // Render the channels and messages
//   return (
//     <LayoutChat channels={channels} activeChannelId={channelId}>
//       {user && (
//         <div className="relative h-screen">
//           <div className="Messages h-full pb-16">
//             <div className="p-2 overflow-y-auto">
//               {messages.map((x) => (
//                 <Message key={x.id.toString()} message={x} />
//               ))}
//               <div ref={messagesEndRef} style={{ height: 0 }} />
//             </div>
//           </div>
//           <div className="p-2 absolute bottom-0 left-0 w-full">
//             <MessageInput
//               onSubmit={async (text) => addMessage(text, channelId, user.id)}
//             />
//           </div>
//         </div>
//       )}
//     </LayoutChat>
//   );
// };

export default function GatekeeperPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push('/channels/1');
  }, [isLoggedIn, router]);

  return (
    <Layout useBackdrop>
      <Container>
        <Hero />
        <Form />
        <LearnMore />
      </Container>
    </Layout>
  );
}
