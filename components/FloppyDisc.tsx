/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const FloppyDisc = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.75 19.25h10.5a2 2 0 002-2V9.828a2 2 0 00-.586-1.414l-3.078-3.078a2 2 0 00-1.414-.586H6.75a2 2 0 00-2 2v10.5a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 19v-3.25a1 1 0 011-1h4.5a1 1 0 011 1V19M8.75 5v3.25"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


