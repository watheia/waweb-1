import { brands } from '../brand-definition';
import { primaryPalette } from '../color-definition';
import { adobeClean } from '../fonts/adobe-clean';
import { headingMargins } from '../heading-margin-definition';
import { IconFont } from '../icons-font';
import { shadowTheme } from '../shadow-definition';
import { headingFontSize, textFontSize } from '../size-definition';
import clsx from 'clsx';
import React from 'react';
import texts from './texts.module.scss';

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        headingFontSize,
        textFontSize,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts['defaults'],
        adobeClean.regular,
        className
      )}
    >
      {children}
      <IconFont />
    </div>
  );
}
