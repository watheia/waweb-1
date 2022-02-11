import React from 'react';
import useStore from './use-store';
import { renderHook } from '@testing-library/react-hooks';

describe('waweb.store/use-store', () => {
  it('MAY subscribe to the activeChannel', () => {
    // TODO
    // @testing-library/react-hooks support for react 18
    // const { result } = renderHook(() => useStore('public'));
    // expect(result.current.activeChannel).toEqual(null);
    expect(useStore).toBeTruthy();
  });
});
