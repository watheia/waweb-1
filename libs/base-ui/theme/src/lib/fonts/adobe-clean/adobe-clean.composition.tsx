import React from 'react';
import {
  AdobeCleanBlack,
  AdobeCleanBlackIt,
  AdobeCleanBoldIt,
  AdobeCleanExtraBold,
  AdobeCleanExtraBoldIt,
  AdobeCleanIt,
  AdobeCleanLight,
  AdobeCleanLightIt,
  AdobeClean,
  AdobeCleanSemiLight,
  AdobeCleanSemiLightIt,
  AdobeCleanBold,
} from './adobe-clean';

export const MockComponent = () => (
  <div data-testid="waweb.spectrum/theme/fonts/adobe-clean">
    <p>
      <strong>abcdefghijklmnopqrstuvwxyz</strong>
      <br />
      <em>ABCDEFGHIJKLMNOPQRSTUVWXYZ</em>
      <br />
      <span style={{ fontWeight: 300 }}>
        0123456789.:,;()*!?'@#&lt;&gt;$%&amp;^+-=~
      </span>
    </p>
    <p style={{ fontSize: '10px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '11px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '12px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '14px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '18px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '24px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '30px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '36px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '48px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '60px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontSize: '72px' }}>
      The quick brown fox jumps over the lazy dog.
    </p>
  </div>
);

export const AdobeCleanLightComp = () => (
  <AdobeCleanLight>
    <MockComponent />
  </AdobeCleanLight>
);

export const AdobeCleanLightItComp = () => (
  <AdobeCleanLightIt>
    <MockComponent />
  </AdobeCleanLightIt>
);

export const AdobeCleanSemiLightComp = () => (
  <AdobeCleanSemiLight>
    <MockComponent />
  </AdobeCleanSemiLight>
);

export const AdobeCleanSemiLightItComp = () => (
  <AdobeCleanSemiLightIt>
    <MockComponent />
  </AdobeCleanSemiLightIt>
);

export const AdobeCleanComp = () => (
  <AdobeClean>
    <MockComponent />
  </AdobeClean>
);

export const AdobeCleanItComp = () => (
  <AdobeCleanIt>
    <MockComponent />
  </AdobeCleanIt>
);

export const AdobeCleanBoldComp = () => (
  <AdobeCleanBold>
    <MockComponent />
  </AdobeCleanBold>
);
export const AdobeCleanBoldItComp = () => (
  <AdobeCleanBoldIt>
    <MockComponent />
  </AdobeCleanBoldIt>
);

export const AdobeCleanExtraBoldComp = () => (
  <AdobeCleanExtraBold>
    <MockComponent />
  </AdobeCleanExtraBold>
);

export const AdobeCleanExtraBoldItComp = () => (
  <AdobeCleanExtraBoldIt>
    <MockComponent />
  </AdobeCleanExtraBoldIt>
);

export const AdobeCleanBlackComp = () => (
  <AdobeCleanBlack>
    <MockComponent />
  </AdobeCleanBlack>
);

export const AdobeCleanBlackItComp = () => (
  <AdobeCleanBlackIt>
    <MockComponent />
  </AdobeCleanBlackIt>
);
