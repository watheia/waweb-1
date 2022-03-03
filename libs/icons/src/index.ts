import Article from './lib/icon-article';
import Avatar from './lib/icon-avatar';
import Briefcase from './lib/icon-briefcase';
import Calendar from './lib/icon-calendar';
import ChartBar from './lib/icon-chartbar';
import Chat from './lib/icon-chat';
import Chat2 from './lib/icon-chat-2';
import Check from './lib/icon-check';
import CloudUpload from './lib/icon-cloud-upload';
import Cog from './lib/icon-cog';
import Copy from './lib/icon-copy';
import DataRefresh from './lib/icon-data-refresh';
import Devices from './lib/icon-devices';
import Download from './lib/icon-download';
import Github from './lib/icon-github';
import Inbox from './lib/icon-inbox';
import LockClosed from './lib/icon-lock-closed';
import Linkedin from './lib/icon-linkedin';
import Refresh from './lib/icon-refresh';
import Search from './lib/icon-search';
import UserCircle from './lib/icon-user-circle';
import Trash from './lib/icon-trash';
import Twitter from './lib/icon-twitter';

export {
  Article,
  Avatar,
  Briefcase,
  Calendar,
  ChartBar,
  Chat,
  Chat2,
  Check,
  CloudUpload,
  Cog,
  Copy,
  DataRefresh,
  Devices,
  Download,
  Github,
  Inbox,
  Linkedin,
  LockClosed,
  Search,
  Refresh,
  UserCircle,
  Trash,
  Twitter
};

const iconsByName = {
  article: Article,
  avatar: Avatar,
  briefcase: Briefcase,
  calendar: Calendar,
  'chart-bar': ChartBar,
  chat: 'Chat',
  'chat-2': Chat2,
  check: Check,
  'cloud-upload': CloudUpload,
  cog: Cog,
  copy: Copy,
  'data-refresh': DataRefresh,
  devices: Devices,
  download: Download,
  github: Github,
  inbox: Inbox,
  linkedin: Linkedin,
  'lock-closed': LockClosed,
  refresh: Refresh,
  search: Search,
  'user-circle': UserCircle,
  trash: Trash,
  twitter: Twitter
};

export type IconName = keyof typeof iconsByName;
export default iconsByName;
