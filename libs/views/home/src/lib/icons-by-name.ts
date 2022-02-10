import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

const iconsByName = {
  'cloud-upload': CloudUploadIcon,
  'lock-closed': LockClosedIcon,
  refresh: RefreshIcon,
  'shield-check': ShieldCheckIcon,
  cog: CogIcon,
  server: ServerIcon,
};

export type IconName = keyof typeof iconsByName;

export default iconsByName;
