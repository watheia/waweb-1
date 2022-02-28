import Image, { ImageProps } from 'next/image';
import React from 'react';
// import logoAlt from './assets/logo-alt.png';
// import logo from './assets/logo.png';

const logo = 'https://www.datocms-assets.com/63265/1644788635-logo.png';
const logoAlt = 'https://www.datocms-assets.com/63265/1644788627-logo-alt.png';

export interface LogoProps extends Omit<ImageProps, 'src'> {
  alternate?: boolean;
}
const Logo = ({
  width = 80,
  height = 120,
  alternate = false,
  ...props
}: LogoProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image
    width={width}
    height={height}
    src={alternate ? logoAlt : logo}
    {...props}
  />
);

export default Logo;
