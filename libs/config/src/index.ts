import { useContext } from 'react';
import { AppConfig } from './lib/AppConfig';
import ConfigContext from './lib/config-context';

export type { AppConfig } from './lib/AppConfig';
export type { NavZone } from './lib/NavZone';
export type { ConfigProviderProps } from './lib/config-context.provider';

export default function useConfig(): AppConfig {
  return useContext(ConfigContext);
}
