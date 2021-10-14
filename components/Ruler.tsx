/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Ruler = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.25 8L16 4.75 4.75 16 8 19.25 19.25 8zM6.39 14.36l.86.89M10.39 10.36l.86.89M14.39 6.36l.86.89M8.39 12.36l.86.89M12.39 8.36l.86.89"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


