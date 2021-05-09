/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Pin = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.25 11c0 4-6.25 8.25-6.25 8.25S5.75 15 5.75 11c0-3.5 2.936-6.25 6.25-6.25S18.25 7.5 18.25 11z"
      />
      <circle
        cx={12}
        cy={11}
        r={2.25}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
}


