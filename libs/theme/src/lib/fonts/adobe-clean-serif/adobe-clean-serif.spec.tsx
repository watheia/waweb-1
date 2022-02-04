import React from 'react';
import { render } from '@testing-library/react';
import { AdobeCleanSerifExample } from './adobe-clean-serif.composition';

it('should render with the correct fonts', () => {
  const { getByTestId } = render(<AdobeCleanSerifExample />);
  const container = getByTestId('waweb.spectrum/theme/fonts/adobe-clean-serif');
  expect(container).toBeTruthy();
  expect(container).toMatchSnapshot();
});
