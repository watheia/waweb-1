import { DivProps } from '@waweb/model';
import { lazy, LazyExoticComponent, Suspense } from 'react';

const Avatar = lazy(() => import('./icon-avatar'));
const Check = lazy(() => import('./icon-avatar'));
const Copy = lazy(() => import('./icon-copy'));
const Download = lazy(() => import('./icon-download'));
const Github = lazy(() => import('./icon-github'));
const Linkedin = lazy(() => import('./icon-linkedin'));
const Logo = lazy(() => import('./icon-logo'));
const Platform = lazy(() => import('./icon-platform'));
const Trash = lazy(() => import('./icon-trash'));
const Twitter = lazy(() => import('./icon-twitter'));
const ChatAlt2 = lazy(() => import('./icon-chat-2'));
const ChatAlt = lazy(() => import('./icon-chat'));
const Briefcase = lazy(() => import('./icon-briefcase'));
const Calendar = lazy(() => import('./icon-calendar'));
const Inbox = lazy(() => import('./icon-inbox'));
const ChartBar = lazy(() => import('./icon-chartbar'));

export function withSuspense(
  Icon: LazyExoticComponent<() => JSX.Element>,
  props: DivProps = {}
): JSX.Element {
  return (
    <Suspense fallback={<div {...props} />}>
      <Icon />
    </Suspense>
  );
}

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
