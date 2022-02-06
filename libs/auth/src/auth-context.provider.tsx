import { UserCredentials } from '@supabase/supabase-js';
import { useMessage } from '@waweb/message';
import { AppRole, User } from '@waweb/model';
import { fetchUserRoles } from '@waweb/store';
import { FunctionComponent, useState } from 'react';
import { AuthContext } from './auth-context';

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setUserLoading] = useState<boolean>(true);
  const [isLoggedIn, setLoggedin] = useState<boolean>(false);
  const [userRoles, setUserRoles] = useState<AppRole[]>([]);
  const { handleMessage } = useMessage();

  const signIn = async (payload: UserCredentials) => {
    if (isLoggedIn) return;
    console.log('Principal Signin.', payload);

    // auto sign-in user
    setLoggedin(true);
    setUser({
      id: '',
      email: payload.email,
      app_metadata: {},
      user_metadata: {},
      created_at: new Date().toISOString(),
      aud: '',
    });

    // handleMessage({
    //   message: `Please enjoy your stay.`,
    //   type: 'success',
    // });

    // check for user roles in background
    fetchUserRoles((roles) => {
      setUserRoles(roles.map((it) => it.role));
    });
  };

  const signOut = async () => {
    if (!isLoggedIn) return;
    console.log('Principal Signout.');
    setLoggedin(false);
    setUser(null);
    setUserLoading(false);
    setUserRoles([]);
  };

  const value = {
    user,
    signUp: signIn,
    signIn,
    signInWithProvider: () => {
      throw new Error('TODO not implemented.');
    },
    signOut,
    isLoggedIn,
    isLoading: false,
    isUserLoading,
    userRoles,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
