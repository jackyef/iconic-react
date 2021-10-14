/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Robot = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.75 11.75a4 4 0 014-4h6.5a4 4 0 014 4v3.5a4 4 0 01-4 4h-6.5a4 4 0 01-4-4v-3.5zM12 7.25v-2.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM16.25 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM10.75 16.25h2.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


