import { act, renderHook } from '@testing-library/react-hooks';
import useAnimationFrame from './use-animation-frame';

describe('useAnimationFrame', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useAnimationFrame());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
