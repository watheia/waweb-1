import { render } from '@testing-library/react';

import ViewsRealtime from './views-realtime';

describe('ViewsRealtime', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ViewsRealtime />);
    expect(baseElement).toBeTruthy();
  });
});
