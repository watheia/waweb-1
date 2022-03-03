import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseAnimationFrame {
  count: number;
  increment: () => void;
}

const noop = () => void 0;

export function useAnimationFrame(
  cb?: false | null | (() => unknown),
  deps: unknown[] = []
) {
  useEffect(() => {
    if (!cb) return noop;

    let animationFrameId = -1;
    const animate = () => {
      cb();
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationFrameId > -1) window.cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cb, ...deps]);
}

export default useAnimationFrame;
