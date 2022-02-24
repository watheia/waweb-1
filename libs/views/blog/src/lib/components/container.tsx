import { DivProps } from '@waweb/model';

export default function Container({ children }: DivProps) {
  return <div className="container px-5 mx-auto">{children}</div>;
}
