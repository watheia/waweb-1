import { renderHook } from '@testing-library/react-hooks';
import useConfig from './use-config';

describe('useConfig', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useConfig());

    expect(result.current.baseUrl).toBe('https://watheia.io');
  });
});
