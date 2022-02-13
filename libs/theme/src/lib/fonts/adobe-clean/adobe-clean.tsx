export const staticFontsPath =
  'https://storage.googleapis.com/watheia.io/assets/fonts';

export type FontKerning = 'normal' | 'semi-condensed' | 'condensed';

export type FontWeight =
  | 'light'
  | 'semi-light'
  | 'normal'
  | 'bold'
  | 'extra-bold'
  | 'black';

export type FontStyle = 'italic' | 'normal';

export type AdobeCleanClass =
  | 'light'
  | 'lightIt'
  | 'semiLightIt'
  | 'semiLight'
  | 'regular'
  | 'it'
  | 'bold'
  | 'boldIt'
  | 'extraBold'
  | 'extraBoldIt'
  | 'black'
  | 'blackIt';

export const fontWeights: Record<FontWeight, string | number> = {
  light: 300,
  'semi-light': 300,
  normal: 'normal',
  bold: 'bold',
  'extra-bold': 'bold',
  black: 900,
};

// TODO this can be done more programaticly
// const fontName = (weight: FontWeight, style: FontStyle): string => {
//   let name = '';
//   if (weight === 'black' && style === 'italic') name = 'BlackIt';
//   else if (weight === 'black' && style === 'normal') name = 'Black';
//   else if (weight === 'extra-bold' && style === 'normal') name = 'ExtraBold';
//   else if (weight === 'extra-bold' && style === 'italic') name = 'ExtraBoldIt';
//   else if (weight === 'bold' && style === 'normal') name = 'Bold';
//   else if (weight === 'bold' && style === 'italic') name = 'BoldIt';
//   else if (weight === 'normal' && style === 'italic') name = 'It';
//   else if (weight === 'normal' && style === 'normal') name = 'Regular';
//   else if (weight === 'light' && style === 'italic') name = 'LightIt';
//   else if (weight === 'light' && style === 'normal') name = 'Light';
//   else if (weight === 'semi-light' && style === 'italic') name = 'SemiLightIt';
//   else if (weight === 'semi-light' && style === 'normal') name = 'SemiLight';
//   else throw new Error('Invalid font varient');

//   return name;
// };

// export type AdobeCleanProps = {
//   fontStyle?: FontStyle;
//   weight?: FontWeight;
// } & HtmlHTMLAttributes<HTMLDivElement>;

// export const AdobeClean = ({
//   weight = 'normal',
//   fontStyle = 'normal',
//   className,
//   children,
//   ...props
// }: AdobeCleanProps) => {
//   const font = fontName(weight, fontStyle);
//   className = className ?? camelCase(font);
//   return (
//     <div className={styles[className]} {...props}>
//       <Global
//         styles={css`
//           @font-face {
//             font-family: 'Adobe Clean';
//             src: url('${staticFontsPath}/subset-AdobeClean-${font}.woff2')
//                 format('woff2'),
//               url('${staticFontsPath}/subset-AdobeClean-${font}.woff')
//                 format('woff');
//             font-weight: ${fontWeights[weight]};
//             font-style: ${fontStyle};
//             font-display: swap;
//           }
//         `}
//       />
//       <link
//         rel="preload"
//         href={`${staticFontsPath}/subset-AdobeClean-${font}.woff2`}
//         as="font"
//         type="font/woff2"
//       />
//       {children}
//     </div>
//   );
// };

// export const AdobeCleanIt = ({ children }: AdobeCleanProps) => (
//   <AdobeClean fontStyle="italic">{children}</AdobeClean>
// );

// export const AdobeCleanLight = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="light">{children}</AdobeClean>
// );

// export const AdobeCleanLightIt = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="light" fontStyle="italic">
//     {children}
//   </AdobeClean>
// );

// export const AdobeCleanSemiLight = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="semi-light">{children}</AdobeClean>
// );

// export const AdobeCleanSemiLightIt = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="semi-light" fontStyle="italic">
//     {children}
//   </AdobeClean>
// );

// export const AdobeCleanBold = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="bold">{children}</AdobeClean>
// );

// export const AdobeCleanBoldIt = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="bold" fontStyle="italic">
//     {children}
//   </AdobeClean>
// );

// export const AdobeCleanExtraBold = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="extra-bold">{children}</AdobeClean>
// );

// export const AdobeCleanExtraBoldIt = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="extra-bold" fontStyle="italic">
//     {children}
//   </AdobeClean>
// );

// export const AdobeCleanBlack = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="black">{children}</AdobeClean>
// );

// export const AdobeCleanBlackIt = ({ children }: AdobeCleanProps) => (
//   <AdobeClean weight="black" fontStyle="italic">
//     {children}
//   </AdobeClean>
// );
