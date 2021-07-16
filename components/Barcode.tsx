/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Barcode = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.25 4.75h-.5a2 2 0 00-2 2v.5M16.75 4.75h.5a2 2 0 012 2v.5M7.25 19.25h-.5a2 2 0 01-2-2v-.5M16.75 19.25h.5a2 2 0 002-2v-.5M7.75 9v6M12 9v6M16.25 9v6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


