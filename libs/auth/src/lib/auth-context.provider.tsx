import {
  AuthChangeEvent,
  Provider,
  Session,
  UserCredentials,
} from '@supabase/supabase-js';
import { useMessage } from '@waweb/message';
import { AppRole, Principal } from '@waweb/model';
import supabase, { fetchUserRoles } from '@waweb/supabase';
import { FunctionComponent, useEffect, useState } from 'react';
import { AuthContext } from './auth-context';

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<Principal | null>(null);
  const [userRoles, setUserRoles] = useState<AppRole[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isUserLoading, setUserLoading] = useState<boolean>(true);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const { handleMessage } = useMessage();

  const signIn = async (payload: UserCredentials) => {
    try {
      setLoading(true);
      const { error, message } = await fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(payload),
      }).then((res) => res.json());
      if (error) {
        handleMessage({ message: error.message, type: 'error' });
      } else if (message) {
        handleMessage({ message, type: 'success' });
      }
    } catch (error) {
      console.error(error);
      handleMessage({
        message:
          (error as any).message || (error as any).error_description || error,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const signInWithProvider = async (provider: Provider) => {
    await supabase.auth.signIn({ provider });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const setServerSession = async (
    event: AuthChangeEvent,
    session: Session | null
  ) => {
    await fetch('/api/session', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  };

  useEffect(() => {
    const user = supabase.auth.user();
    setUserLoading(false);

    if (user) {
      setUser(user);
      setLoggedIn(true);
      fetchUserRoles((userRoles) => {
        setUserRoles(userRoles.map((userRole) => userRole.role));
      });
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.info('Auth State Changed', event, session);
        const user = session?.user ?? null;
        setUserLoading(false);
        setUser(user);
        setLoggedIn(!!user);

        // update session in ssr
        await setServerSession(event, session);

        if (user) {
          // refresh user roles
          await fetchUserRoles((userRoles) => {
            setUserRoles(userRoles.map((userRole) => userRole.role));
          });
        } else {
          // reset user roles
          setUserRoles([]);
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const value = {
    user,
    signIn,
    signInWithProvider,
    signOut,
    isLoggedIn,
    isLoading,
    isUserLoading,
    userRoles,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
