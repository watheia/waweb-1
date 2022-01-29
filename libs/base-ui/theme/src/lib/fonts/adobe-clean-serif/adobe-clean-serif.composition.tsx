import React from 'react';
import {
  AdobeCleanSerif,
  AdobeCleanSerifBlack,
  AdobeCleanSerifBlackIt,
  AdobeCleanSerifBold,
  AdobeCleanSerifBoldIt,
  AdobeCleanSerifIt,
} from './adobe-clean-serif';

export const MockComponent = () => (
  <div data-testid="waweb.spectrum/theme/fonts/adobe-clean-serif">
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

export const AdobeCleanSerifExample = () => {
  return (
    <AdobeCleanSerif>
      <MockComponent />
    </AdobeCleanSerif>
  );
};

export const AdobeCleanSerifItExample = () => {
  return (
    <AdobeCleanSerifIt>
      <MockComponent />
    </AdobeCleanSerifIt>
  );
};

export const AdobeCleanSerifBoldExample = () => {
  return (
    <AdobeCleanSerifBold>
      <MockComponent />
    </AdobeCleanSerifBold>
  );
};

export const AdobeCleanSerifBoldItExample = () => {
  return (
    <AdobeCleanSerifBoldIt>
      <MockComponent />
    </AdobeCleanSerifBoldIt>
  );
};

export const AdobeCleanSerifBlackExample = () => {
  return (
    <AdobeCleanSerifBlack>
      <MockComponent />
    </AdobeCleanSerifBlack>
  );
};

export const AdobeCleanSerifBlackItExample = () => {
  return (
    <AdobeCleanSerifBlackIt>
      <MockComponent />
    </AdobeCleanSerifBlackIt>
  );
};
