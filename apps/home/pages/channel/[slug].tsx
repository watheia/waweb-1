import { useAuthWithRedir } from '@waweb/auth';
import { useStore } from '@waweb/store';
import HomeView from '@waweb/ui.home-view';
import { useRouter } from 'next/router';

const ChannelsPage = () => {
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
    />
  );
};

export default ChannelsPage;
