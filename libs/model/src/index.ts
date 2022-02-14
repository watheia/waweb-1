import { AppRole, Channel, Message, User } from '@prisma/client';
import { Provider } from '@supabase/supabase-js';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

// export prisma types
////

export { AppPermission, AppRole, Prisma, UserStatus } from '@prisma/client';
export type {
  Channel,
  Message,
  RolePermission,
  User,
  UserRole,
} from '@prisma/client';

// export model types
////
export type MessageType = 'comment' | 'alert';
export type MessageModel = Message & {
  channel?: Channel;
  author?: User;
  type?: MessageType;
};
export type ChannelModel = Channel & { user?: User; messages?: MessageModel[] };
export type UserModel = User & {
  channels?: Channel[];
  messages?: Message[];
  roles: AppRole[];
};

// export auth types
////
export type { User as Principal } from '@supabase/supabase-js';

// Misc Types
////

export type { Category } from './types/Category';
export type { Image } from './types/Image';
export type { Link } from './types/Link';
export type { Post } from './types/Post';
export type { Project } from './types/Project';
export type { Stakeholder } from './types/Stakeholder';
export type { StakeholderLink } from './types/StakeholderLink';
export type { Task } from './types/Task';

export type SignInRequest = {
  email: string;
  phone?: string;
  password?: string;
  refreshToken?: string;
  provider?: Provider;
};

export type FormState = 'default' | 'loading' | 'error';

export type Children =
  | boolean
  | ReactChild
  | ReactFragment
  | ReactPortal
  | null
  | undefined;

export type DivProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export class FormError extends Error {
  constructor(public res: Response) {
    super();
  }
}

// GraphQL Generics

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
