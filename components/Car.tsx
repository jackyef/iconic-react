/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Car = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.25 17.25H5.75a1 1 0 01-1-1v-3.5a2 2 0 012-2h10.5a2 2 0 012 2v3.5a1 1 0 01-1 1z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 14a.5.5 0 11-1 0 .5.5 0 011 0zM16.5 14a.5.5 0 11-1 0 .5.5 0 011 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.25 10.75H5.75l.721-4.329A2 2 0 018.444 4.75h7.112a2 2 0 011.973 1.671l.721 4.329zM6.75 17.75v1.5M17.25 17.75v1.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


