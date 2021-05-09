/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Clock = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx={12}
        cy={12}
        r={7.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 8v4l2 2" />
    </svg>
  );
}


