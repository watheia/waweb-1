import { useNavigation } from '@waweb/navigation';
import { useEffect } from 'react';
import { useAuth } from './use-auth';

export const useAuthWithRedir = () => {
  const context = useAuth();
  const { isUserLoading: userLoading, isLoggedIn: loggedIn } = context;
  const navigateTo = useNavigation();

  useEffect(() => {
    if (!userLoading && !loggedIn) {
      navigateTo.auth();
    }
  }, [userLoading, loggedIn, navigateTo]);

  return context;
};
