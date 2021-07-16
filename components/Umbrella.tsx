/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Umbrella = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 13.5v4.125a1.625 1.625 0 11-3.25 0v-.875M12 4.75v.5M12 5.75c-4.004 0-7.25 2.496-7.25 6.5 0 0 2.75 1 7.25 1s7.25-1 7.25-1c0-4.004-3.246-6.5-7.25-6.5zM12 5.75S8.75 8.5 8.75 13M12 5.75S15.25 8.5 15.25 13"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


