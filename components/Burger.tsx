/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Burger = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_701:87)"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.75 7.75a3 3 0 013-3h6.5a3 3 0 013 3v2H5.75v-2zM5.75 16.25a3 3 0 003 3h6.5a3 3 0 003-3v-1.5H16l-2 1-2-1H5.75v1.5zM4.75 12.25h14.5" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_701:87">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}


