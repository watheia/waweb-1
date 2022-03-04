import * as React from 'react';
import { SVGProps } from 'react';

export interface DevicesProps extends SVGProps<SVGSVGElement> {
  color?: string;
}
const Devices = ({ color = '#6e6e6e', ...props }: DevicesProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <defs>
      <style>{`.a{fill:${color}}`}</style>
    </defs>
    <title>{'S DesktopAndMobile 18 N'}</title>
    <path
      className="a"
      d="M5.5 15h-1a.49.49 0 0 0-.5.479V16h5v-5H2V2h12v1h2V.5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5H6v1.5a.5.5 0 0 1-.5.5Z"
    />
    <path
      className="a"
      d="M17 4h-6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-3.5 1h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm.5 12.55a1.05 1.05 0 1 1 1.05-1.05A1.05 1.05 0 0 1 14 17.55ZM17 15h-6V7h6Z"
    />
  </svg>
);

export default Devices;
