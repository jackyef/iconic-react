/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Bunting = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.75 4.75S6.851 7 12 7c5.148 0 7.25-2.25 7.25-2.25M4.75 12.75S6.851 15 12 15c5.148 0 7.25-2.25 7.25-2.25M9.5 7l2.5 4.25L14.5 7M9.5 15l2.5 4.25L14.5 15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7l4.25 3.25v-5.5M15 15l4.25 3.25v-5.5M9 7l-4.25 3.25V5M9 15l-4.25 3.25V13"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


