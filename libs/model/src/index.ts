import { AppRole, Channel, Message, Prisma } from '@prisma/client';
import { Provider, User } from '@supabase/supabase-js';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

// export prisma types
////

export { AppPermission, AppRole, UserStatus } from '@prisma/client';
export type {
  Channel,
  Message,
  RolePermission,
  UserRole,
} from '@prisma/client';

// export compound types
////

export type MessageModel = Message & { channel?: Channel; author?: User };
export type ChannelModel = Channel & { user?: User; messages?: MessageModel[] };
export type UserModel = User & {
  channels?: Channel[];
  messages?: Message[];
  roles: AppRole[];
};

// export helper types
////

export type Children =
  | boolean
  | ReactChild
  | ReactFragment
  | ReactPortal
  | null
  | undefined;

export type DivProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export type {
  NextAppPageProps,
  NextAppPageRedirProps,
  NextAppPageServerSideProps,
  NextAppPageUserProps,
  NextAppSEOProps,
} from './types/app';

// export auth types
////

export type { User } from '@supabase/supabase-js';

export type SignInRequest = {
  email: string;
  phone?: string;
  password?: string;
  refreshToken?: string;
  provider?: Provider;
};

// Misc Types
export type { Author } from './types/Author';
export type { CaseStudy } from './types/CaseStudy';
export type { Category } from './types/Category';
export type { Image } from './types/Image';
export type { Link } from './types/Link';
export type { Stakeholder } from './types/Stakeholder';
export type { StakeholderLink } from './types/StakeholderLink';
export type { Task } from './types/Task';
