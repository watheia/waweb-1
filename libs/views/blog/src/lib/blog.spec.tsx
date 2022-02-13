import { render } from '@testing-library/react';
import Blog from './blog';
import allPosts from '../fixtures/allPosts.json';

describe('waweb.views.blog', () => {
  it('should render successfully', () => {
    const { container } = render(<Blog data={allPosts.data} preview={false} />);
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchSnapshot();
  });
});
