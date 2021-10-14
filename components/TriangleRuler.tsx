/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const TriangleRuler = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.25 4.75l-14.5 14.5h14.5V4.75zM7.5 16.5l.75.75M12 12l1.25 1.25M16.5 7.5l.75.75M9.5 14.5l1.75 1.75M14.5 9.5l1.75 1.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


