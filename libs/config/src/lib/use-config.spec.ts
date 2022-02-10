import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';
import ConfigContext from './config-context';
import config from './config.json';

describe('waweb.app/config', () => {
  it('should render successfully', () => {
    // TODO
    // @testing-library/react-hooks support for react 18
    // const { result } = renderHook(() => useContext(ConfigContext));
    // expect(result.current).toEqual(config);
    expect(config.legalName).toEqual('Watheia Labs, LLC');
  });
});
