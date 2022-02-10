import { createContext } from 'react';
import { AppConfig } from './AppConfig';
import defaultConfig from './config.json';

const ConfigContext = createContext<AppConfig>(defaultConfig);
export default ConfigContext;
