import { render } from '@testing-library/react';

import Logo from './logo';

describe('waweb.ui/logo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logo />);
    expect(baseElement).toBeTruthy();
  });
});
