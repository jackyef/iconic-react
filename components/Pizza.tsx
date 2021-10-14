/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Pizza = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.75 16.75l6.25-12 6.25 12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 12a.5.5 0 11-1 0 .5.5 0 011 0zM14.5 14a.5.5 0 11-1 0 .5.5 0 011 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.25 16.75c-3.5 3.5-9 3.5-12.5 0M16.95 14.95C14 18 10 18 7.05 14.95"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


