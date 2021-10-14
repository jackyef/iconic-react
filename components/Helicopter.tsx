/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Helicopter = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.75 7.75h6.5a2 2 0 012 2v4.5a2 2 0 01-2 2h-4.5a2 2 0 01-2-2v-6.5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16.5v2.75h-3.25a4 4 0 01-4-4v-.5M12 7.75H4.75v1.5l5.5 2M12 7.5V5M8 4.75h8M14 19.25h2.25"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


