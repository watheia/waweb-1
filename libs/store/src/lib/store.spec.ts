import React from 'react';
import useStore from './use-store';
import { renderHook } from '@testing-library/react-hooks';

describe('waweb.store/use-store', () => {
  it('MAY subscribe to the activeChannel', () => {
    const { result } = renderHook(() => useStore('public'));
    expect(result.current.activeChannel).toEqual(null);
  });
});
