import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';
import { SSRProvider } from '@react-aria/ssr';
import { OverlayProvider } from '@react-aria/overlays';
import { Theme } from '@waweb/theme';
import { MessageProvider } from '@waweb/message';
import { AuthProvider } from '@waweb/auth';
import ResizeHandler from '@waweb/ui.resize-handler';
import NProgress from '@waweb/ui.nprogress';

describe('Index', () => {
  it('should render successfully', () => {
    const { container } = render(
      <SSRProvider>
        <OverlayProvider>
          <Theme>
            <MessageProvider>
              <AuthProvider>
                <Index />
              </AuthProvider>
            </MessageProvider>
          </Theme>
          <ResizeHandler />
          <NProgress />
        </OverlayProvider>
      </SSRProvider>
    );
    expect(container).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
