import { Cog, UserCircle } from '@waweb/icons';

const icons = {
  user_circle: UserCircle,
  cog: Cog,
};

export type ProfileIcon = keyof typeof icons;

export default icons;
