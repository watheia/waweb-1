import { DivProps } from '@waweb/model';

export default function Container({ children }: DivProps) {
  return <div className="container mx-auto px-5">{children}</div>;
}
