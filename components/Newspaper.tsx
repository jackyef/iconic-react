/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Newspaper = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.25 19.25H5.75a1 1 0 01-1-1V5.75a1 1 0 011-1h8.5a1 1 0 011 1V10"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.523 9.75H15.25v7.5a2 2 0 104 0v-5.773c0-.954-.773-1.727-1.727-1.727zM7.75 8.75a1 1 0 011-1h2.5a1 1 0 011 1v1.5a1 1 0 01-1 1h-2.5a1 1 0 01-1-1v-1.5zM8 13.75h4M8 16.25h4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


