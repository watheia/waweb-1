export type AdobeCleanSerifClass =
  | 'regular'
  | 'it'
  | 'bold'
  | 'boldIt'
  | 'black'
  | 'blackIt';

// export type AdobeCleanSerifProps = Omit<AdobeCleanProps, 'className'>;

// export function AdobeCleanSerif({
//   children,
//   weight = 'normal',
//   fontStyle = 'normal',
//   ...props
// }: AdobeCleanSerifProps) {
//   // use assigned className, or construct from component props
//   const className = clsx({
//     regular: weight === 'normal' && fontStyle === 'normal',
//     it: weight === 'normal' && fontStyle === 'italic',
//     bold: weight === 'bold' && fontStyle === 'normal',
//     boldIt: weight === 'bold' && fontStyle === 'italic',
//     black: weight === 'black' && fontStyle === 'normal',
//     blackIt: weight === 'black' && fontStyle === 'italic',
//   }) as AdobeCleanSerifClass;

//   //convert from camel case to pascal case to get font asset name
//   const fontName = startCase(camelCase(className)).replace(/ /g, '');

//   return (
//     <div className={styles[className]} {...props}>
//       <Global
//         styles={css`
//           @font-face {
//             font-family: 'Adobe Clean Serif';
//             src: local('Adobe Clean Serif ${fontName}'),
//               local('AdobeCleanSerif-${fontName}'),
//               url('${staticFontsPath}/subset-AdobeCleanSerif-${fontName}.woff2')
//                 format('woff2'),
//               url('${staticFontsPath}/subset-AdobeCleanSerif-${fontName}.woff')
//                 format('woff');
//             font-weight: ${fontWeights[weight]};
//             font-style: ${fontStyle};
//             font-display: swap;
//           }
//         `}
//       />
//       <link
//         rel="preload"
//         href={`${staticFontsPath}/subset-AdobeCleanSerif-${fontName}.woff2`}
//         as="font"
//         type="font/woff2"
//         crossOrigin="anonymous"
//       />
//       {children}
//     </div>
//   );
// }

// export const AdobeCleanSerifIt = ({ children }: AdobeCleanSerifProps) => (
//   <AdobeCleanSerif fontStyle="italic">{children}</AdobeCleanSerif>
// );

// export const AdobeCleanSerifBold = ({ children }: AdobeCleanSerifProps) => (
//   <AdobeCleanSerif weight="bold">{children}</AdobeCleanSerif>
// );

// export const AdobeCleanSerifBoldIt = ({ children }: AdobeCleanSerifProps) => (
//   <AdobeCleanSerif weight="bold" fontStyle="italic">
//     {children}
//   </AdobeCleanSerif>
// );

// export const AdobeCleanSerifBlack = ({ children }: AdobeCleanSerifProps) => (
//   <AdobeCleanSerif weight="black">{children}</AdobeCleanSerif>
// );

// export const AdobeCleanSerifBlackIt = ({ children }: AdobeCleanSerifProps) => (
//   <AdobeCleanSerif weight="black" fontStyle="italic">
//     {children}
//   </AdobeCleanSerif>
// );
