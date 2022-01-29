import styles from './adobe-clean-serif.module.scss';

export type {
  AdobeCleanSerifProps,
  AdobeCleanSerifClass,
} from './adobe-clean-serif';
export * from './adobe-clean-serif';

const { regular, it, bold, boldIt, black, blackIt } = styles;
export const adobeCleanSerif = { regular, it, bold, boldIt, black, blackIt };
