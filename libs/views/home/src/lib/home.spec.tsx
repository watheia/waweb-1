import { render } from '@testing-library/react';

import Home from './home';
import features from '../fixtures/features.json';
import posts from '../fixtures/posts.json';
import { HomeFeature } from '../types/HomeFeature';
import { Post } from '@waweb/model';

describe('waweb.views/home', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Home features={features as HomeFeature[]} posts={posts as Post[]} />
    );
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchSnapshot();
  });
});
