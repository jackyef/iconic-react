/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Wallet = ({ size = 24, ...props }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.25 8.25v9a2 2 0 01-2 2H6.75a2 2 0 01-2-2V6.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 13a.5.5 0 11-1 0 .5.5 0 011 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 8.25H6.5a1.75 1.75 0 110-3.5h8.75a2 2 0 012 2v1.5zm0 0h2"
      />
    </svg>
  );
}


