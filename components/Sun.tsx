/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Sun = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} fill="none" {...props}>
      <circle
        cx={12}
        cy={12}
        r={3.25}
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
        d="M12 2.75v1.5M17.25 6.75l-1.184 1.184M21.25 12h-1.5M17.25 17.25l-1.184-1.184M12 19.75v1.5M7.934 16.066L6.75 17.25M4.25 12h-1.5M7.934 7.934L6.75 6.75"
      />
    </svg>
  );
}


