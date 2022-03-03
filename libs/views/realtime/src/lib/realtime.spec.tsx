import { render } from '@testing-library/react';

import Realtime from './realtime';

describe('waweb.views/realtime', () => {
  it('should render successfully', () => {
    const { container } = render(<Realtime />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
