import { render } from '@testing-library/react';

import Layout from './layout';
import { MockContent } from '@waweb/atoms';

describe('waweb.layout', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Layout>
        <MockContent />
      </Layout>
    );
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchSnapshot();
  });
});
