import { Children } from '@waweb/model';
import { AppConfig } from './AppConfig';
import ConfigContext from './config-context';

export interface ConfigProviderProps extends AppConfig {
  children: Children;
}

export const ConfigProvider = ({ children, ...props }: ConfigProviderProps) => {
  return (
    <ConfigContext.Provider value={props}>{children}</ConfigContext.Provider>
  );
};
