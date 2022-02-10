import { render } from '@testing-library/react';

import MessageInput from './message-input';

describe('waweb.ui/message-input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MessageInput />);
    expect(baseElement).toBeTruthy();
  });
});
