/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Box = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.75 8L12 4.75 19.25 8 12 11.25 4.75 8zM4.75 16L12 19.25 19.25 16M19.25 8v8M4.75 8v8M12 11.5V19"
      />
    </svg>
  );
}


