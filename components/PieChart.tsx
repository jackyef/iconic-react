/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const PieChart = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} fill="none" {...props}>
      <circle
        cx={12}
        cy={12}
        r={7.25}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.75 5v5.25a2 2 0 002 2H19"
      />
    </svg>
  );
}


