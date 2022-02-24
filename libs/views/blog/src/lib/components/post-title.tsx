import { DivProps } from '@waweb/model';

export default function PostTitle({ children }: DivProps) {
  return (
    <h1 className="mb-12 text-6xl font-bold leading-tight tracking-tighter text-center text-gray-300 md:text-left md:text-7xl md:leading-none lg:text-8xl">
      {children}
    </h1>
  );
}
