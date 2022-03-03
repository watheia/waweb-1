import { render } from '@testing-library/react';

import ComingSoon from './coming-soon';

describe('ComingSoon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComingSoon issueNum="1000" />);
    expect(baseElement).toBeTruthy();
  });
});
