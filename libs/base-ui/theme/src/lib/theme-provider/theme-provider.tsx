import { brands } from '@waweb/base-ui.theme.brand-definition';
import { primaryPalette } from '@waweb/base-ui.theme.color-definition';
import {
  AdobeClean,
  adobeClean,
  AdobeCleanBold,
  AdobeCleanBoldIt,
  AdobeCleanIt,
  AdobeCleanLight,
  AdobeCleanLightIt,
  AdobeCleanSemiLight,
  AdobeCleanSemiLightIt,
} from '@waweb/base-ui.theme.fonts.adobe-clean';
import {
  AdobeCleanSerif,
  AdobeCleanSerifBlack,
  AdobeCleanSerifBlackIt,
  AdobeCleanSerifBold,
  AdobeCleanSerifBoldIt,
  AdobeCleanSerifIt,
} from '@waweb/base-ui.theme.fonts.adobe-clean-serif';
import { headingMargins } from '@waweb/base-ui.theme.heading-margin-definition';
import { IconFont } from '@waweb/base-ui.theme.icons-font';
import { shadowTheme } from '@waweb/base-ui.theme.shadow-definition';
import {
  headingFontSize,
  textFontSize,
} from '@waweb/base-ui.theme.size-definition';
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
    <>
      <div
        {...props}
        className={clsx(
          headingFontSize,
          textFontSize,
          shadowTheme,
          primaryPalette,
          brands,
          headingMargins,
          texts.defaults,
          adobeClean.regular,
          className
        )}
      >
        {children}
        <IconFont />
        <AdobeClean />
        <AdobeCleanIt />
        <AdobeCleanBold />
        <AdobeCleanBoldIt />
        <AdobeCleanLight />
        <AdobeCleanLightIt />
        <AdobeCleanSemiLight />
        <AdobeCleanSemiLightIt />
        <AdobeCleanSerif />
        <AdobeCleanSerifIt />
        <AdobeCleanSerifBold />
        <AdobeCleanSerifBoldIt />
        <AdobeCleanSerifBlack />
        <AdobeCleanSerifBlackIt />
      </div>
    </>
  );
}
