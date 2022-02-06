import { Provider, UserCredentials } from '@supabase/supabase-js';
import { AppRole, User } from '@waweb/model';
import { createContext } from 'react';

export type AuthModel = {
  user: User | null;
  signUp: (payload: UserCredentials) => Promise<void>;
  signIn: (payload: UserCredentials) => Promise<void>;
  signInWithProvider: (provider: Provider) => Promise<void>;
  signOut: () => Promise<void>;
  isLoggedIn: boolean;
  isLoading: boolean;
  isUserLoading: boolean;
  userRoles: AppRole[];
};

const todoNotImpl = async () => {
  throw new Error('TODO not implemented.');
};

export const AuthContext = createContext<AuthModel>({
  user: null,
  signUp: todoNotImpl,
  signIn: todoNotImpl,
  signInWithProvider: todoNotImpl,
  signOut: todoNotImpl,
  isLoggedIn: false,
  isLoading: false,
  isUserLoading: false,
  userRoles: [],
});
