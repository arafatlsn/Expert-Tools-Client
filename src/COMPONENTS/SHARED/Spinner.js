import React from "react";
import HashLoader from "react-spinners/PacmanLoader"
import { css } from "@emotion/react";

const SpinnerComp = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className="absolute left-[42%] lg:left-[50%] z-50 top-[50%]">
      <HashLoader color={"#1B99E5"} loading={true} size={30} />
    </div>
  );
};

export default SpinnerComp;
