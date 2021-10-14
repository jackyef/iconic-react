/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Rocket = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.456 6.855a8 8 0 015.408-2.105h.386v.386a8 8 0 01-2.105 5.408l-6.15 6.704-4.243-4.243 6.704-6.15zM7.25 16.75l-2.5 2.5M9.25 18.75l-.5.5M5.25 14.75l-.5.5M13 19.25L14.24 14 11 17.25l2 2zM6.75 13L10 9.75l-5.25 1 2 2.25z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


