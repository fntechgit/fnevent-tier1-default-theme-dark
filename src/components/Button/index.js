import * as React from "react";
import BaseButton from "@mui/base/Button";
import { styled } from "@mui/system";
import useBoundingClientRect from "../../../src/utils/hooks/useBoundingClientRect";

import LoginButton from "./Login";
import RegisterButton from "./Register";

const StyledButton = styled(BaseButton)(({
  theme,
  height,
  variant = "default"
}) => {
  const color = variant === "default" ? "white" : "black";
  const colorInvert = variant ===  "default" ? "black" : "white";
  const defaultStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    color: colorInvert,
    backgroundColor: color,
    borderRadius: 0,
    textTransform: "uppercase",
    transition: "box-shadow 150ms ease",
    cursor: "pointer",
    ...(
      theme.unstable_sx({
        border: {
          xs: "1px solid white",
          lg: "2px solid white"
        },
        p: {
          xs: 2
        },
        height: {
          xs: 56,
          lg: 92
        },
        width: {
          xs: 137,
          md: 162,
          // TODO: check if value in figma is correct
          lg: 216
        }
      })
    ),
    svg: {
      stroke: colorInvert
    }
  };
  const hoverStyles = {
    color: color,
    ...(height && {
      boxShadow: `inset 0 -${height}px 0 0 ${colorInvert} !important`
    }),
    svg: {
      stroke: color
    }
  };
  return ({
    ...(defaultStyles),
    "&:hover": hoverStyles
  });
});

const Button = ({
  children,
  ...rest
}) => {
  const [
    buttonRef,
    buttonBoundingClientRect
  ] = useBoundingClientRect();
  return (
    <StyledButton 
      ref={buttonRef}
      {...(
        buttonBoundingClientRect && {
          height: buttonBoundingClientRect.height
        }
      )}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export {
  LoginButton,
  RegisterButton
};

export default Button;
