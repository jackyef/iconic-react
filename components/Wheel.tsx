/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Wheel = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.25 12a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM5 12h4.5M19 12h-4.5M11 10L8 6M11 14l-3 4M13 10l3-4M13 14l3 4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


