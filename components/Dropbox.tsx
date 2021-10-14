/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Dropbox = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.75 10L12 7.75 15.25 10 12 12.25 8.75 10zM8.75 10l-4-3L8 4.75l4 2.75M12 7.5l4-2.75L19.25 7l-4 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.25l4 3L19.25 13l-4-3M8.75 10l-4 3L8 15.25l4-3M8.75 16.75l3.25 2.5 3.25-2.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


