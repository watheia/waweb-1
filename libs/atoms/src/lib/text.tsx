import { DivProps } from '@waweb/model';
import clsx from 'clsx';
import styles from './text.module.css';

/**
 * Base Component types
 */
export type TextElement = 'div' | 'p' | 'span';

export type TextVariant = 'lead' | 'body1' | 'body2' | 'muted';

export interface TextProps extends DivProps {
  element?: TextElement;
  variant?: TextVariant;
  alternate?: boolean;
}

export default function Text({
  className,
  children,
  element = 'p',
  variant = 'body1',
  alternate = false,
  ...props
}: TextProps) {
  const Tag = element;
  console.log(styles);
  return (
    <Tag
      className={clsx(
        styles['base'],
        styles[variant],
        alternate && styles['alt'],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
