import React from "react";
import { Loading } from "./LoadingBar.styles.jsx";
import loadingBar from "/images/loading-bar.gif";

function LoadingBar() {
  return (
    <Loading>
      <img src={loadingBar} alt="loading" />
    </Loading>
  );
}

export default LoadingBar;
