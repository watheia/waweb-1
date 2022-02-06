import { useAuthWithRedir } from '@waweb/auth';
import TimelineView from '@waweb/ui.timeline-view';
import { useRouter } from 'next/router';

const ChannelsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // redirect to auth if principal missing
  useAuthWithRedir('/');

  // Render the chat view
  return <TimelineView slug={slug as string} />;
};

export default ChannelsPage;
