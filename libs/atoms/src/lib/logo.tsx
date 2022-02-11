import React from 'react';
import Image, { ImageProps } from 'next/image';

// import logo from './assets/logo.png';
// import logoAlt from './assets/logo-alt.png';
const logo = '/images/logo.png';
const logoAlt = '/images/logo-alt.png';

export interface LogoProps extends Omit<ImageProps, 'src'> {
  alternate?: boolean;
}
const Logo = ({
  width = 80,
  height = 28,
  alternate = false,
  ...props
}: LogoProps) => (
  <Image
    width={width}
    height={height}
    src={alternate ? logoAlt : logo}
    {...props}
  />
);

export default Logo;
