import _styles from './adobe-clean.module.scss';

export type { AdobeCleanProps, FontWeight, FontStyle } from './adobe-clean';
export * from './adobe-clean';

const {
  light,
  lightIt,
  semiLightIt,
  semiLight,
  regular,
  it,
  bold,
  boldIt,
  extraBold,
  extraBoldIt,
  black,
  blackIt,
} = _styles;

export const adobeClean = {
  light,
  lightIt,
  semiLightIt,
  semiLight,
  regular,
  it,
  bold,
  boldIt,
  extraBold,
  extraBoldIt,
  black,
  blackIt,
};
