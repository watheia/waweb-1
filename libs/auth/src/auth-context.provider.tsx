import {
  AuthChangeEvent,
  Provider,
  Session,
  UserCredentials,
} from '@supabase/supabase-js';
import { useMessage } from '@waweb/message';
import { AppRole, User } from '@waweb/model';
import supabase, { fetchUserRoles } from '@waweb/supabase';
import { FunctionComponent, useEffect, useState } from 'react';
import { AuthContext } from './auth-context';

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userRoles, setUserRoles] = useState<AppRole[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isUserLoading, setUserLoading] = useState<boolean>(true);
  const [isLoggedIn, setLoggedin] = useState<boolean>(false);
  const { handleMessage } = useMessage();

  const signUp = async (payload: UserCredentials) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp(payload);
      if (error) {
        handleMessage({ message: error.message, type: 'error' });
      } else {
        handleMessage({
          message:
            'Signup successful. Please check your inbox for a confirmation email!',
          type: 'success',
        });
      }
    } catch (error) {
      handleMessage({
        message: (error as any).error_description || error,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (payload: UserCredentials) => {
    try {
      setLoading(true);
      const { error, user } = await supabase.auth.signIn(payload);
      if (error) {
        handleMessage({ message: error.message, type: 'error' });
      } else if (user) {
        handleMessage({
          message: `Please enjoy your stay`,
          type: 'success',
        });
      } else {
        handleMessage({
          message: `Please check your inbox for the login url.`,
          type: 'success',
        });
      }
    } catch (error) {
      handleMessage({
        message: (error as any).error_description || error,
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
    await fetch('/api/auth', {
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
      setLoggedin(true);
      fetchUserRoles((userRoles) => {
        setUserRoles(userRoles.map((userRole) => userRole.role));
      });
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.info('Auth State Changed', event, session);
        const user = session?.user ?? null;
        setUserLoading(false);
        await setServerSession(event, session);
        if (user) {
          setUser(user);
          setLoggedin(true);
          // Router.push(ROUTE_HOME);
        } else {
          setUser(null);
          // Router.push(ROUTE_AUTH);
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const value = {
    user,
    signUp,
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
