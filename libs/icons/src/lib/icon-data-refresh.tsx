import * as React from 'react';
import { SVGProps } from 'react';

export interface DataRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const DataRefresh = ({
  color = '#6e6e6e',
  width = 24,
  height = 24,
  ...props
}: DataRefreshProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    {...props}
  >
    <defs>
      <style>{`.a{fill:${color}}`}</style>
    </defs>
    <title>{'S DataRefresh 18 N'}</title>
    <ellipse className="a" cx={9} cy={3.5} rx={8} ry={2.5} />
    <path
      className="a"
      d="M7.4 15.1v-1.65a4.81 4.81 0 0 1 .058-.55 6.538 6.538 0 0 1 .185-.812C5.118 11.923 1.75 11.322 1 10.135V14.5c0 1.21 2.75 2.218 6.4 2.45ZM13.5 7.4a6.057 6.057 0 0 1 3.15.925l.207-.212.143-.146V5.135c-1.224 1.548-5.532 2-8 2s-7.106-.584-8-2V8.5c0 1.28 3.079 2.333 7.047 2.48A6.086 6.086 0 0 1 13.5 7.4ZM13.5 16.718a3.106 3.106 0 0 1-2.385-1.062l1.153-1.156H9v3.275l1.25-1.254A4.372 4.372 0 0 0 13.5 18a4.65 4.65 0 0 0 4.5-4.5h-1.14a3.445 3.445 0 0 1-3.36 3.218Z"
    />
    <path
      className="a"
      d="M16.779 10.479A4.607 4.607 0 0 0 13.5 9 4.65 4.65 0 0 0 9 13.5h1.14a3.445 3.445 0 0 1 3.36-3.217 3.142 3.142 0 0 1 2.436 1.058L14.8 12.5H18V9.232Z"
    />
  </svg>
);

export default DataRefresh;
