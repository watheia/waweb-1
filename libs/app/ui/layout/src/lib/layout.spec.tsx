import { render } from '@testing-library/react';

import Layout from './layout';
import { MockContent } from '@waweb/ui';

describe('waweb.app/ui/layout', () => {
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
