/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Pawn = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.75 19.25l.697-1.394a2 2 0 011.79-1.106h5.527a2 2 0 011.789 1.106l.697 1.394H6.75zM14.25 7a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM8.75 16.5l2-7.5M13.25 9l2 7.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


