/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const WarningTriangle = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.952 16.354l5.263-10.497c.738-1.472 2.839-1.472 3.576 0l5.258 10.497a2 2 0 01-1.788 2.896H6.741a2 2 0 01-1.789-2.896z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v2"
      />
      <circle cx={12} cy={16} r={1} fill="currentColor" />
    </svg>
  );
}


