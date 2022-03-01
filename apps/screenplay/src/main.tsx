import { withRoot } from '@waweb/layout';
import '@waweb/theme.styles/index.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';

const MyApp = withRoot(App);

// TODO remove eslint override once types catch up
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

if (root) {
  root.render(
    <StrictMode>
      <MyApp />
    </StrictMode>
  );
}
