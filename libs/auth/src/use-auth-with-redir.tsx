import { useNavigation } from '@waweb/navigation';
import { useEffect } from 'react';
import { useAuth } from './use-auth';

export const useAuthWithRedir = () => {
  const context = useAuth();
  const { userLoading, loggedIn } = context;
  const navigateTo = useNavigation();

  useEffect(() => {
    if (!userLoading && !loggedIn) {
      navigateTo.auth();
    }
  }, [userLoading, loggedIn]);

  return context;
};
