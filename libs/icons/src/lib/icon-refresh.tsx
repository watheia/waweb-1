import * as React from 'react';
import { SVGProps } from 'react';

export interface RefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const Refresh = ({
  color = '#6e6e6e',
  width = 24,
  height = 24,
  ...props
}: RefreshProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    {...props}
  >
    <defs>
      <style>{'.a{fill:#6e6e6e}'}</style>
    </defs>
    <title>{'S Refresh 18 N'}</title>
    <path
      className="a"
      d="M16.337 10h-.947a.608.608 0 0 0-.581.469 5.723 5.723 0 0 1-9.559 2.537l-.346-.346 1.978-1.978A.392.392 0 0 0 7 10.4a.4.4 0 0 0-.377-.4H1.25a.25.25 0 0 0-.25.25v5.375a.4.4 0 0 0 .4.375.39.39 0 0 0 .28-.118l1.808-1.808.179.178a8.09 8.09 0 0 0 3.642 2.165 7.715 7.715 0 0 0 9.437-5.474q.048-.178.087-.358a.5.5 0 0 0-.496-.585ZM16.6 2a.39.39 0 0 0-.28.118l-1.81 1.808-.179-.176a8.09 8.09 0 0 0-3.642-2.166 7.715 7.715 0 0 0-9.436 5.477q-.047.176-.086.354A.5.5 0 0 0 1.663 8h.947a.608.608 0 0 0 .581-.469 5.723 5.723 0 0 1 9.559-2.537l.346.346-1.978 1.978A.392.392 0 0 0 11 7.6a.4.4 0 0 0 .377.4h5.373a.25.25 0 0 0 .25-.25V2.377A.4.4 0 0 0 16.6 2Z"
    />
  </svg>
);

export default Refresh;
