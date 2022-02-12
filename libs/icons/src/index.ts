import Avatar from './lib/icon-avatar';
import Briefcase from './lib/icon-briefcase';
import Calendar from './lib/icon-calendar';
import ChartBar from './lib/icon-chartbar';
import Chat from './lib/icon-chat';
import Chat2 from './lib/icon-chat-2';
import Check from './lib/icon-check';
import Cog from './lib/icon-cog';
import Copy from './lib/icon-copy';
import Download from './lib/icon-download';
import Github from './lib/icon-github';
import Inbox from './lib/icon-inbox';
import Linkedin from './lib/icon-linkedin';
import Search from './lib/icon-search';
import UserCircle from './lib/icon-user-circle';
import Trash from './lib/icon-trash';
import Twitter from './lib/icon-twitter';

export {
  Avatar,
  Briefcase,
  Calendar,
  ChartBar,
  Chat,
  Chat2,
  Check,
  Cog,
  Copy,
  Download,
  Github,
  Inbox,
  Linkedin,
  Search,
  UserCircle,
  Trash,
  Twitter,
};

const iconsByName = {
  Avatar,
  Briefcase,
  Calendar,
  ChartBar,
  Chat,
  Chat2,
  Check,
  Cog,
  Copy,
  Download,
  Github,
  Inbox,
  Linkedin,
  Search,
  UserCircle,
  Trash,
  Twitter,
};

export type IconName = keyof typeof iconsByName;
export default iconsByName;
