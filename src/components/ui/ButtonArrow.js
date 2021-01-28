import React from "react";

export default function ButtonArrow(props) {
  return (
    <svg
      className={props.class}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill={props.fill}
      viewBox="-5 0 16 18"
    >
      <path d="M 9 3 L 7.94 4.06 l 4.06 3.94 H -1.998 v 1.538 h 14.012 l -4.19 4.19 L 9.061 14.986 l 5.986 -6.324 z" />
    </svg>
  );
}
