/* This file is auto-generated */

import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Balloon = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size} viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4.75C9 4.75 5.75 8 5.75 11s2.51 6.043 5 7l-.35.438a.5.5 0 00.39.812h2.42a.5.5 0 00.39-.812L13.25 18c2.49-.957 5-4 5-7S15 4.75 12 4.75z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


