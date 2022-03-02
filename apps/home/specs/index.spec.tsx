import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';
import { render } from '@testing-library/react';
import { NProgress, ResizeHandler } from '@waweb/atoms';
import { AuthProvider } from '@waweb/auth';
import { MessageProvider } from '@waweb/message';
import { Theme } from '@waweb/theme';
import { fixtures } from '@waweb/views.home';
import React from 'react';
import Index from '../pages/index';

describe('waweb.home', () => {
  it('should render successfully', () => {
    const { container } = render(
      <SSRProvider>
        <OverlayProvider>
          <Theme>
            <MessageProvider>
              <AuthProvider>
                <Index features={fixtures.features} posts={fixtures.posts} />
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
