/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Plane = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 8.407a4 4 0 011.172-2.829L12 4.75l.828.828A4 4 0 0114 8.407v1.823l5.25 2.52v1.327a1 1 0 01-1.158.988L14 14.41v3.146l1.25.694v1h-6.5v-1l1.25-.625V14.41l-4.092.655a1 1 0 01-1.158-.988V12.75L10 10.23V8.407z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


