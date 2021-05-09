/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const ZoomIn = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} fill="none" {...props}>
      <circle
        cx={11}
        cy={11}
        r={6.25}
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
        d="M15.5 15.5l3.75 3.75M11 8.75v4.5M13.25 11h-4.5"
      />
    </svg>
  );
}


