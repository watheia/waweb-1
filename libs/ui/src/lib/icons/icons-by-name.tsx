import { default as Avatar, default as Check } from './icon-avatar';
import Briefcase from './icon-briefcase';
import Calendar from './icon-calendar';
import ChartBar from './icon-chartbar';
import ChatAlt from './icon-chat';
import ChatAlt2 from './icon-chat-2';
import Copy from './icon-copy';
import Download from './icon-download';
import Github from './icon-github';
import Inbox from './icon-inbox';
import Linkedin from './icon-linkedin';
import Logo from './icon-logo';
import Platform from './icon-platform';
import Trash from './icon-trash';
import Twitter from './icon-twitter';

// export function withSuspense(
//   Icon: LazyExoticComponent<() => JSX.Element>,
//   props: DivProps = {}
// ): JSX.Element {
//   return (
//     <Suspense fallback={<div {...props} />}>
//       <Icon />
//     </Suspense>
//   );
// }

const iconsByName = {
  Avatar,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Logo,
  Platform,
  Trash,
  Twitter,
  ChatAlt2,
  ChatAlt,
  Briefcase,
  Calendar,
  Inbox,
  ChartBar,
};

export type Icon = keyof typeof iconsByName;
export default iconsByName;
