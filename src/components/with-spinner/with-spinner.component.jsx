import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

/* 
This is a HOC, which takes a component (WrappedComponent) and,
based on a prop (isLoading), displays either a Spinner component or
the actual WrappedComponent
 */

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherWrappedComponentProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherWrappedComponentProps} />
    );
  };
  return spinner;
};

export default WithSpinner;
