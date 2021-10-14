/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const ColorSwatch = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 16a.5.5 0 11-1 0 .5.5 0 011 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 6.75a2 2 0 012-2h4.5a2 2 0 012 2v10.5a2 2 0 01-2 2h-4.5a2 2 0 01-2-2V6.75zM15.75 15.25l2.93-2.992a2 2 0 00.028-2.77l-3.08-3.273c-.755-.803-2.438-.415-2.438-.415"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


