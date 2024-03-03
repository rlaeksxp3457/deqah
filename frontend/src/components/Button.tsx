// import styled from "styled-components";
import React from "react";

export type ButtonProps = { isDisabled: boolean };

const Button: React.FC<ButtonProps> = ({ isDisabled = false, ...rest }) => {
  return <div>1</div>;
};

export default Button;
