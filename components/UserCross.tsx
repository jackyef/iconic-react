/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const UserCross = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx={12}
        cy={8}
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
        d="M12.25 19.25h-5.3c-1.18 0-2.06-1.04-1.46-2.055C6.363 15.723 8.24 14 12.25 14M19.25 19.25l-3.5-3.5M15.75 19.25l3.5-3.5"
      />
    </svg>
  );
}


