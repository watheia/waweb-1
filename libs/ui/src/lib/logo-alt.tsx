import * as React from 'react';
import { SVGProps } from 'react';

const LogoAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 300 106"
    {...props}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1={182.48}
        y1={435.86}
        x2={185.45}
        y2={430.63}
        gradientTransform="translate(0 -352)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#00a995" />
        <stop offset={0.5} stopColor="#006eb9" />
        <stop offset={1} stopColor="#00aa4f" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1={160.89}
        y1={436.23}
        x2={166.4}
        y2={433.5}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-3"
        x1={165.1}
        y1={437.83}
        x2={170.18}
        y2={436.63}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-4"
        x1={177.41}
        y1={438.1}
        x2={181.41}
        y2={434.82}
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-5"
        x1={171.77}
        y1={436.99}
        x2={175.39}
        y2={438.03}
        xlinkHref="#linear-gradient"
      />
      <filter
        id="luminosity-invert"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0" />
      </filter>
      <style>{'.cls-2{fill:#231f20}'}</style>
      <mask
        id="mask"
        x={64.23}
        y={18.77}
        width={39}
        height={39}
        maskUnits="userSpaceOnUse"
      >
        <image
          width={39}
          height={39}
          transform="translate(64.23 18.77)"
          xlinkHref="data:image/png;base64,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"
          style={{
            filter: 'url(#luminosity-invert)',
          }}
        />
      </mask>
    </defs>
    <g
      style={{
        isolation: 'isolate',
      }}
    >
      <g id="logo">
        <path
          className="cls-2"
          d="M10 4.58h22.45l-.86 3.84c-1.69.24-4.53.62-6.37.7.31 6.36 1.77 23.53 2.08 31.35 3.08-6.22 13-26.75 16.72-34.88h4.91c.38 3.22 4.29 29.9 4.91 35.05C56 35.9 66 14.19 68 9.19c-1.66-.19-6-.53-7.48-.77l.93-3.84H79.1l-1 3.82c-1.9.31-3.22.52-4.84.76-3.08 6.08-18.18 37.06-22.19 45.74h-5.81c-.53-5.6-3.77-27.37-4.53-33.81L24.46 54.9h-5.58c-.52-6.06-3.88-39.25-4.67-45.78-.79-.08-3.39-.46-5.15-.7Z"
        />
        <path
          d="M67.31 38.21c-.09-13.19 12.12-20.72 20.37-12h.52l.7-2.86H96v20.51c0 2.41.77 2.79 2.2 2.43l1.07 6.89c-3.91 1.67-9.9.67-11.26-3.14h-.23c-8.47 8.77-21.18 1.9-20.47-11.83Zm19.15 5.72v-12c-4.65-3.55-9.8-1.95-9.77 6.3 0 5.77 2 8.18 5.15 8.18a5.26 5.26 0 0 0 4.62-2.46Z"
          style={{
            fill: '#038f8f',
          }}
        />
        <path
          d="M67.31 38.21c-.09-13.19 12.12-20.72 20.37-12h.52l.7-2.86H96v20.51c0 2.41.77 2.79 2.2 2.43l1.07 6.89c-3.91 1.67-9.9.67-11.26-3.14h-.23c-8.47 8.77-21.18 1.9-20.47-11.83Zm19.15 5.72v-12c-4.65-3.55-9.8-1.95-9.77 6.3 0 5.77 2 8.18 5.15 8.18a5.26 5.26 0 0 0 4.62-2.46Z"
          style={{
            stroke: '#1a1718',
            fill: 'none',
            strokeMiterlimit: 10,
            strokeWidth: 2,
          }}
        />
        <g
          style={{
            mask: 'url(#mask)',
          }}
        >
          <g
            style={{
              mixBlendMode: 'screen',
              opacity: 0.85,
            }}
          >
            <path
              d="M67.31 38.21c-.09-13.19 12.12-20.72 20.37-12h.52l.7-2.86H96v20.51c0 2.41.77 2.79 2.2 2.43l1.07 6.89c-3.91 1.67-9.9.67-11.26-3.14h-.23c-8.47 8.77-21.18 1.9-20.47-11.83Zm19.15 5.72v-12c-4.65-3.55-9.8-1.95-9.77 6.3 0 5.77 2 8.18 5.15 8.18a5.26 5.26 0 0 0 4.62-2.46Z"
              style={{
                fill: '#fff',
              }}
            />
            <path
              d="M67.31 38.21c-.09-13.19 12.12-20.72 20.37-12h.52l.7-2.86H96v20.51c0 2.41.77 2.79 2.2 2.43l1.07 6.89c-3.91 1.67-9.9.67-11.26-3.14h-.23c-8.47 8.77-21.18 1.9-20.47-11.83Zm19.15 5.72v-12c-4.65-3.55-9.8-1.95-9.77 6.3 0 5.77 2 8.18 5.15 8.18a5.26 5.26 0 0 0 4.62-2.46Z"
              style={{
                stroke: '#fff',
                fill: 'none',
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
          </g>
        </g>
        <path
          className="cls-2"
          d="M106 11.19H90.37c-.38 0-.52-.24-.45-.62l1-7.13c.07-.45.24-.62.69-.62h38.11c.46 0 .69.14.77.69l.69 7c.07.45-.15.69-.53.69h-15.5v41.34c0 .45-.24.69-.62.69h-7.89c-.53.07-.69-.14-.69-.69ZM168.21 53.23c-.45 0-.62-.14-.62-.62V31.22H146.2v21.32c0 .45-.17.69-.62.69h-7.89c-.53 0-.69-.24-.69-.69v-49c0-.53.14-.7.62-.7h8c.46 0 .62.15.62.62v19.42h21.4V3.37a.5.5 0 0 1 .4-.55h8.35c.38 0 .52.14.52.52v49.25c0 .45-.14.62-.62.62h-8.06ZM220.13 52.61c-.07.53-.24.62-.69.62h-30.53c-.52 0-.69-.24-.69-.62V3.46c0-.38.14-.62.62-.62h29.59c.46 0 .62.08.7.53l.87 7.13c.07.38-.07.69-.52.69H197.5v12.19h19.93c.38 0 .53.07.53.52v7.32c0 .38-.24.45-.53.45H197.5v13.19h23.22c.46 0 .62.24.53.62ZM237.85 52.54c0 .55-.17.69-.62.69h-8c-.45 0-.62-.24-.62-.69V3.46c0-.52.24-.62.62-.62h8.06c.45 0 .62.15.62.62ZM256.85 40l-4.22 12.66a.75.75 0 0 1-.83.62h-7.66c-.45 0-.62-.24-.52-.76L259.4 7.54a11.71 11.71 0 0 0 .69-4.15c0-.31.15-.52.46-.52h10.66c.38 0 .45.07.52.45l17.72 49.24c.07.46 0 .7-.45.7h-8.59a.77.77 0 0 1-.76-.46L275.19 40Zm15.88-8.35c-1.62-5.05-5.22-15.71-6.75-21.08h-.07c-1.24 5.13-4.29 14.12-6.6 21.08Z"
        />
        <g id="Icon">
          <path
            d="M168.25 77.8a5.13 5.13 0 1 1 10.26 0h9.3v-1.87a.45.45 0 0 0-.41-.45l-3.68-.48a10.47 10.47 0 0 0-1.05-2.53l2.33-2.88a.46.46 0 0 0 0-.61l-2.63-2.6a.49.49 0 0 0-.63 0l-2.94 2.27a11.49 11.49 0 0 0-2.55-1l-.46-3.67a.46.46 0 0 0-.45-.4h-3.73a.46.46 0 0 0-.46.4l-.45 3.67a10.66 10.66 0 0 0-2.56 1l-2.94-2.27a.47.47 0 0 0-.62 0L161.87 69a.46.46 0 0 0-.05.61l2.3 2.91a10.67 10.67 0 0 0-1.05 2.48l-3.71.45a.47.47 0 0 0-.41.45v1.9Z"
            style={{
              fill: '#1a1718',
            }}
          />
          <path
            d="M168.25 77.8a5.13 5.13 0 1 1 10.26 0h9.3v-1.87a.45.45 0 0 0-.41-.45l-3.68-.48a10.47 10.47 0 0 0-1.05-2.53l2.33-2.88a.46.46 0 0 0 0-.61l-2.63-2.6a.49.49 0 0 0-.63 0l-2.94 2.27a11.49 11.49 0 0 0-2.55-1l-.46-3.67a.46.46 0 0 0-.45-.4h-3.73a.46.46 0 0 0-.46.4l-.45 3.67a10.66 10.66 0 0 0-2.56 1l-2.94-2.27a.47.47 0 0 0-.62 0L161.87 69a.46.46 0 0 0-.05.61l2.3 2.91a10.67 10.67 0 0 0-1.05 2.48l-3.71.45a.47.47 0 0 0-.41.45v1.9Z"
            style={{
              fill: '#201c1d',
            }}
          />
          <path
            d="M184.7 83a1.91 1.91 0 0 0-1 .26l-2.37-2.31v-2.2h-1v2.34a.43.43 0 0 0 .14.33l2.52 2.46a1.88 1.88 0 0 0-.27.93 1.91 1.91 0 0 0 2.33 1.82 1.86 1.86 0 0 0-.35-3.63Z"
            style={{
              fill: 'url(#linear-gradient)',
            }}
          />
          <path
            d="M166.2 81.42a.44.44 0 0 0 .15-.33v-2.34h-1v2.15L163 83.21a2.06 2.06 0 0 0-1-.26 1.86 1.86 0 0 0-.42 3.68 1.9 1.9 0 0 0 2.42-1.82 1.66 1.66 0 0 0-.27-.93Z"
            style={{
              fill: '#04bfbf',
            }}
          />
          <path
            d="M166.2 81.42a.44.44 0 0 0 .15-.33v-2.34h-1v2.15L163 83.21a2.06 2.06 0 0 0-1-.26 1.86 1.86 0 0 0-.42 3.68 1.9 1.9 0 0 0 2.42-1.82 1.66 1.66 0 0 0-.27-.93Z"
            style={{
              fill: 'url(#linear-gradient-2)',
            }}
          />
          <path
            d="m169.21 82.76-2.72 2.65a.43.43 0 0 0-.14.33v2a1.91 1.91 0 0 0-1.14 2.87 1.83 1.83 0 0 0 1.56.89 1.91 1.91 0 0 0 1.9-2.39 1.94 1.94 0 0 0-1.37-1.37v-1.81l2.7-2.64a.48.48 0 0 0 .15-.34v-4.2h-.95Z"
            style={{
              fill: 'url(#linear-gradient-3)',
            }}
          />
          <path
            d="M180.42 87.72v-2a.44.44 0 0 0-.15-.33l-2.72-2.65v-4h-1V83a.48.48 0 0 0 .15.34l2.71 2.64v1.79a1.91 1.91 0 0 0-1.14 2.87 1.86 1.86 0 0 0 1.57.89 1.91 1.91 0 0 0 1.9-2.39 2 2 0 0 0-1.32-1.42Z"
            style={{
              fill: 'url(#linear-gradient-4)',
            }}
          />
          <path
            d="M174 88.6v-9.85h-1v9.85a1.86 1.86 0 0 0 .41 3.67 1.88 1.88 0 0 0 1.92-2.33A2 2 0 0 0 174 88.6Z"
            style={{
              fill: 'url(#linear-gradient-5)',
            }}
          />
        </g>
        <image
          width={116}
          height={63}
          transform="translate(184.23 49.77)"
          xlinkHref="data:image/png;base64,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"
          style={{
            mixBlendMode: 'multiply',
            opacity: 0.75,
          }}
        />
        <text
          transform="translate(188.22 89.98)"
          style={{
            fontSize: '40.24px',
            fontFamily: 'InkFree,Ink Free',
            letterSpacing: '.03em',
          }}
        >
          {'LABS'}
        </text>
      </g>
    </g>
  </svg>
);

export default LogoAlt;