import * as React from 'react';
import { SVGProps } from 'react';

export interface ArticleProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const Article = ({
  color = '#6e6e6e',
  width = 24,
  height = 24,
  ...props
}: ArticleProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    {...props}
  >
    <defs>
      <style>{`.a{fill:${color}}`}</style>
    </defs>
    <title>{'S Article 18 N'}</title>
    <path
      className="a"
      d="M10 5h5v1h-5zM10 9h5v1h-5zM3 11h6v1H3zM10 7h5v1h-5zM10 11h5v1h-5zM3 5h6v5H3z"
    />
    <path
      className="a"
      d="M16.5 2h-15a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5ZM2 14V3h14v11Z"
    />
  </svg>
);

export default Article;
