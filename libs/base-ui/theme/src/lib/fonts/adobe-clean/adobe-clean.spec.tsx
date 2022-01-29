import React from 'react';
import { render } from '@testing-library/react';
import { AdobeCleanComp } from './adobe-clean.composition';

it('should render with the correct font', () => {
  const { getByTestId } = render(<AdobeCleanComp />);
  const container = getByTestId('waweb.spectrum/theme/fonts/adobe-clean');
  expect(container).toBeTruthy();
  expect(container).toMatchSnapshot();
});
