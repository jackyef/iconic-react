/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Building = ({ size, ...props }: Props) => {
  return (
    <svg width={size} height={size} fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.75 6.75a2 2 0 012-2h8.5a2 2 0 012 2v12.5H5.75V6.75zM19.25 19.25H4.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 15.75a2 2 0 012-2h.5a2 2 0 012 2v3.5h-4.5v-3.5z"
      />
      <circle cx={10} cy={10} r={1} fill="currentColor" />
      <circle cx={14} cy={10} r={1} fill="currentColor" />
    </svg>
  );
}


