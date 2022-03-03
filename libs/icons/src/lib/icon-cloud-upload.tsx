import * as React from 'react';
import { SVGProps } from 'react';

export interface CloudUploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
}
const CloudUpload = ({
  color = '#6e6e6e',
  width = 24,
  height = 24,
  ...props
}: CloudUploadProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} {...props}>
    <defs>
      <style>{`.a{fill:${color}}`}</style>
    </defs>
    <title>{'S UploadToCloud 18 N'}</title>
    <path className="a" d="M8 16.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V12H8Z" />
    <path
      className="a"
      d="M14.786 5.572a3.223 3.223 0 0 0-.363.02 4.072 4.072 0 1 0-7.961-1.618 3.431 3.431 0 0 0-4.204 4.197A1.929 1.929 0 1 0 1.928 12H8V9H5.85a.35.35 0 0 1-.35-.35.343.343 0 0 1 .103-.245l3.235-2.842a.25.25 0 0 1 .325 0l3.233 2.842a.343.343 0 0 1 .104.245.35.35 0 0 1-.35.35H10v3h4.786a3.215 3.215 0 0 0 0-6.428Z"
    />
  </svg>
);

export default CloudUpload;
