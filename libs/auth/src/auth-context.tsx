import { createContext, FunctionComponent, useState, useEffect } from 'react';
import Router from 'next/router';
import {
  User,
  Session,
  AuthChangeEvent,
  Provider,
  UserCredentials,
} from '@supabase/supabase-js';
import supabase from '@waweb/store';
import { useNavigation } from '@waweb/navigation';
import { useMessage } from '@waweb/message';

export type AuthContextProps = {
  user: User | null;
  signUp: (payload: UserCredentials) => void;
  signIn: (payload: UserCredentials) => void;
  signInWithProvider: (provider: Provider) => Promise<void>;
  signOut: () => void;
  loggedIn: boolean;
  loading: boolean;
  userLoading: boolean;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [loggedIn, setLoggedin] = useState(false);
  const navigateTo = useNavigation();
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
        message: (error as any).error_description ?? error,
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
      console.log('Sign In: ', { error, user });
      if (error) {
        handleMessage({ message: error.message, type: 'error' });
      } else if (user === null) {
        handleMessage({
          message: `Please check your email for the magic link`,
          type: 'success',
        });
      } else {
        handleMessage({ message: `Welcome, ${user.email}`, type: 'success' });
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

  const signOut = async () => await supabase.auth.signOut();

  const setServerSession = async (event: AuthChangeEvent, session: Session) => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  };

  useEffect(() => {
    const user = supabase.auth.user();

    if (user) {
      setUser(user);
      setUserLoading(false);
      setLoggedin(true);
      navigateTo.home();
    } else {
      setUserLoading(false);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const user = session?.user! ?? null;
        setUserLoading(false);
        if (session) {
          await setServerSession(event, session);
          if (user) {
            setUser(user);
            setLoggedin(true);
            navigateTo.home();
          } else {
            setUser(null);
            navigateTo.auth();
          }
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        signInWithProvider,
        signOut,
        loggedIn,
        loading,
        userLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
