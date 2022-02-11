import { render } from '@testing-library/react';

import Dashboard from './dashboard';

describe('waweb.app/ui/dashboard', () => {
  it('should render successfully', () => {
    const { container } = render(<Dashboard />);
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchSnapshot();
  });
});
