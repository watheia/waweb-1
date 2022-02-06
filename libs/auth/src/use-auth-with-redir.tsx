import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './use-auth';

export const useAuthWithRedir = (redirectTo = '/') => {
  const context = useAuth();
  const router = useRouter();
  const { isUserLoading, isLoggedIn } = context;

  useEffect(() => {
    if (!isUserLoading && !isLoggedIn) {
      router.push(redirectTo);
    }
  }, [isUserLoading, isLoggedIn, redirectTo, router]);

  return context;
};
