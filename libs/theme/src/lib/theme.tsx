import { Theme as BaseTheme } from '@waweb/base-ui.theme.theme-provider';
import { HtmlHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface ThemeProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Theme({ children, className, ...props }: ThemeProps) {
  return (
    <BaseTheme className={className} {...props}>
      {children}
    </BaseTheme>
  );
}

export default Theme;
