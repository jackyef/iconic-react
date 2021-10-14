/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const TrafficLights = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.75 6.75a2 2 0 012-2h2.5a2 2 0 012 2v10.5a2 2 0 01-2 2h-2.5a2 2 0 01-2-2V6.75z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 8a.5.5 0 11-1 0 .5.5 0 011 0zM12.5 12a.5.5 0 11-1 0 .5.5 0 011 0zM12.5 16a.5.5 0 11-1 0 .5.5 0 011 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 6.75h4v4.5l-4-4.5zM19.25 6.75h-4V11l4-4.25zM19.25 11.75h-4V16l4-4.25zM4.75 11.75h4v4.5l-4-4.5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


