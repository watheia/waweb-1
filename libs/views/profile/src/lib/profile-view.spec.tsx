import { render } from '@testing-library/react';

import ProfileView from './profile-view';

describe('waweb.views/profile', () => {
  it('should render successfully', () => {
    const { container } = render(<ProfileView />);
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchSnapshot();
  });
});
