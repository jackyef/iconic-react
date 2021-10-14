/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const AlarmWarning = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.25 4.75l-.5.5M12 8.75V12l2.25 2.25M19.13 13.317a7.25 7.25 0 11-5.813-8.446M7 18l-1.25 1.25M17 18l1.25 1.25M18 4.75v2.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 10a.5.5 0 11-1 0 .5.5 0 011 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


