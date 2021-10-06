import React, { ReactNode } from "react";
import * as styled from "./Button.styles";

interface ButtonProps {
  variant: "primary" | "ghost" | "cta";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  onClick?: () => void;
}

/**
 * Button component
 */
const Button = ({ size = "medium", children, ...props }: ButtonProps) => {
  return (
    <styled.Button type="button" {...props}>
      {children}
    </styled.Button>
  );
};

export default Button;
