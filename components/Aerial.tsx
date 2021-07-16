/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Aerial = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 10a.5.5 0 11-1 0 .5.5 0 011 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 13.25c-2.04-1.688-1.914-4.75 0-6.5M14.767 13.25c2.04-1.688 1.914-4.75 0-6.5M12.25 12.75h-.5l-2 6.5h4.5l-2-6.5zM7.25 15.25c-3.336-3.336-3.32-7.172 0-10.5M16.754 15.25c3.336-3.336 3.32-7.172 0-10.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


