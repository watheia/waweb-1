import { act, renderHook } from '@testing-library/react-hooks';
import useConfig from './use-config';

describe('useConfig', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useConfig());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
