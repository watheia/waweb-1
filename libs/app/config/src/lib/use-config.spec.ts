import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';
import ConfigContext from './config-context';
import config from './config.json';

describe('waweb.app/config', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useContext(ConfigContext));
    expect(result.current).toEqual(config);
  });
});
