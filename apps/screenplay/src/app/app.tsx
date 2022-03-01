// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfileView from '@waweb/views.profile';
import Realtime from '@waweb/views.realtime';

export function App() {
  return (
    <BrowserRouter>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/realtime">Realtime</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<NxWelcome title={'screenplay'} />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/realtime" element={<Realtime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
