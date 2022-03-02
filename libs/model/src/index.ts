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

/**
 * @deprecated
 */
export type MessageModel = Message & {
  channel?: Channel;
  author?: User;
  type?: MessageType;
};

/**
 * @deprecated
 */
export type ChannelModel = Channel & { user?: User; messages?: MessageModel[] };

/**
 * @deprecated
 */
export type UserModel = User & {
  channels?: Channel[];
  messages?: Message[];
  roles: AppRole[];
};

// Principal user
////

export type { User as Principal } from '@supabase/supabase-js';

// Entity Types
////

export type { PostSummary } from './types/PostSummary';
export type { AllPostsData } from './types/AllPostsData';
export type { AllPostsResponse } from './types/AllPostsResponse';
export type { Author } from './types/Author';
export type { Blocks } from './types/Blocks';
export type { Blog } from './types/Blog';
export type { Category } from './types/Category';
export type { Content } from './types/Content';
export type { Document } from './types/Document';
export type { DocumentChildren } from './types/DocumentChildren';
export type { ImageModel } from './types/ImageModel';
export type {
  MakeMaybe,
  Exact,
  InputMaybe,
  MakeOptional,
  Maybe,
} from './types/maybe';
export type { MorePosts } from './types/MorePosts';
export type { OgImage } from './types/OgImage';
export type { Page } from './types/Page';
export type { Post } from './types/Post';
export type { PostsBySlugData } from './types/PostsBySlugData';
export type { PostsBySlugResponse } from './types/PostsBySlugResponse';
export type { ResponsiveImage } from './types/ResponsiveImage';
export type { Site } from './types/Site';
export type { Value } from './types/Value';

// Helper Types
////

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
