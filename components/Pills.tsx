/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Pills = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 4.75v2.5h-8.5v-2.5h8.5zM15.25 7.25v3l1.317 1.152a2 2 0 01.683 1.506v4.342a2 2 0 01-2 2H8.765a2 2 0 01-2-2v-4.347a2 2 0 01.677-1.5L8.75 10.25v-3h6.5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16.25h6.25v-3.5H7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


