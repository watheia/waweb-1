import { useAuthWithRedir } from '@waweb/auth';
import { NextAppPageProps } from '@waweb/model';
import { useStore } from '@waweb/store';
import HomeView from '@waweb/ui.home-view';
import { NavItem } from '@waweb/ui.layout-dash';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

export interface ChannelsPageProps extends NextAppPageProps {
  navigation: NavItem[];
}

const ChannelsPage = ({ navigation }: ChannelsPageProps) => {
  const router = useRouter();
  const { slug } = router.query;
  const { channels, activeChannel, timeline } = useStore(
    typeof slug === 'string' ? slug : 'public'
  );
  const { user, userRoles } = useAuthWithRedir('/');

  // redirect to auth if principal missing
  useAuthWithRedir('/');

  // Render the chat view
  return (
    <HomeView
      user={user}
      userRoles={userRoles}
      channels={channels}
      activeChannel={activeChannel}
      timeline={timeline}
      navigation={navigation}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      navigation: [
        {
          name: 'Messageboard',
          href: '/public',
          icon: 'ChatAlt2',
        },
        {
          name: 'Announcements',
          href: '/announcements',
          icon: 'ChatAlt',
        },
        {
          name: 'Project Updates',
          href: '/updates',
          icon: 'Briefcase',
        },
        {
          name: 'Timeline',
          href: '/timeline',
          icon: 'Calendar',
        },
        {
          name: 'Ledger',
          href: '/ledger',
          icon: 'Inbox',
        },
        {
          name: 'Reports',
          href: '/reports',
          icon: 'ChartBar',
        },
      ],
    },
  };
};

interface PageProps extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<PageProps> = async () => {
  return {
    fallback: false,
    paths: [
      { params: { slug: 'public' } },
      { params: { slug: 'announcements' } },
    ],
  };
};

export default ChannelsPage;
