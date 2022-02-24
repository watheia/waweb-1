import { render } from '@testing-library/react';
import features from '../fixtures/features.json';
import { HomeFeature } from '../types/HomeFeature';
import Home from './home';

describe('waweb.views/home', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Home features={features as HomeFeature[]} posts={[]} />
    );
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchSnapshot();
  });
});
