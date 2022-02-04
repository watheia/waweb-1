import { useContext } from 'react';
import { AuthContext, AuthContextProps } from './auth-context';

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (context === undefined || context === null) {
    throw new Error('useAuth must be used within a AuthContext.Provider');
  }

  return context as AuthContextProps;
};
