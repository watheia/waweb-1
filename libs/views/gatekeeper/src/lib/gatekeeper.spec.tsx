import { render } from '@testing-library/react';

import Gatekeeper from './gatekeeper';

describe('waweb.views/gatekeeper', () => {
  it('should render successfully', () => {
    const { container } = render(<Gatekeeper onLogin={() => void 0} />);
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchSnapshot();
  });
});
