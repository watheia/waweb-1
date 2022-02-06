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

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { ...context, user: context.user! };
};
