import { HtmlHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface ThemeProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Theme({ children, className, ...props }: ThemeProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export default Theme;
