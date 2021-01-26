import React from "react";

const FooterAdornment = () => {
  const svgStyles = {
    st0: {
      fill: "none",
    },
    st1: {
      fill: "#FFFFFF",
      fontFamily: "Roboto",
      fontSize: "0.75rem",
    },
  };
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 294.4 180"
      style={{ enableBackground: "new 0 0 294.4 180" }}
      xmlSpace="preserve"
    >
      <path d="M294.4,0L168,227H0V0H294.4z" />
      <g id="Full_Box">
        <polyline points="168,227 294.4,227 294.4,-1" />
      </g>
      <path className={svgStyles.st0} d="M111-24v376" />
      <text
        id="_xA9__BeriDev.to"
        transform="matrix(1 0 0 1 5 175)"
        className={`${svgStyles.st1}`}
      >
        © beri.dev {new Date().getFullYear()}
      </text>
      <text
        transform="matrix(1 0 0 1 207.1765 175)"
        className={`${svgStyles.st1}`}
      >
        Calgary, AB
      </text>
    </svg>
  );
};

export default FooterAdornment;
