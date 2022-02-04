import React from 'react';
import { primaryPalette } from './index';

const colors = [
  '--text-color',
  '--text-color-heavy',
  '--text-color-light',
  '--text-inactive',
  '--border-color',
  '--border-color-heavy',
  '--border-color-light',
  '--border-color-lightest',
  '--accent-color',
  '--accent-heavy',
  '--accent-light',
  '--accent-text',
  '--accent-text-heavy',
  '--text-on-accent',
  '--accent-bg',
  '--accent-bg-heavy',
  '--bg-color',
  '--bg-heavy',
  '--bg-heaviest',
  '--bg-heaviest',
  '--bg-bedrock',
  '--bg-navigation',
  '--bg-overlay',
  '--bg-modal',
  '--bg-tooltip',
  '--bg-tooltip-heavy',
  '--bg-dent',
  '--error-color',
  '--error-heavy',
  '--error-light',
  '--error-bg',
  '--error-bg-heavy',
];

export function Preview() {
  return (
    <div className={primaryPalette}>
      {colors.map((x) => (
        <ColorBox colorName={x} />
      ))}
    </div>
  );
}

function ColorBox({ colorName }: { colorName: string }) {
  return (
    <div style={{ display: 'flex', borderRadius: 4, marginBottom: 4 }}>
      <div
        style={{
          background: `var(${colorName})`,
          width: 20,
          height: 20,
          borderRadius: 4,
          marginRight: 8,
          border: '1px solid black',
        }}
      ></div>
      <div>{colorName}</div>
    </div>
  );
}
