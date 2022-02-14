import { DivProps } from '@waweb/model';
import Alert from './alert';

export interface BlogLayoutProps extends DivProps {
  preview: boolean;
}
export default function BlogLayout({ preview, children }: BlogLayoutProps) {
  return (
    <div>
      <Alert preview={preview} />
      <article>{children}</article>
    </div>
  );
}
