import * as React from "react";
import BaseButton from "@mui/base/Button";
import { styled } from "@mui/system";
import useBoundingClientRect from "../../../src/utils/hooks/useBoundingClientRect";

const StyledButton = styled(BaseButton)(({
  theme,
  height,
  variant = "default"
}) => {
  const color = variant === "default" ? "white" : "black";
  const colorInvert = variant ===  "default" ? "black" : "white";
  const defaultStyles = {
    color: colorInvert,
    backgroundColor: color,
    border: "2px solid white",
    borderRadius: 0,
    textTransform: "uppercase",
    transition: "box-shadow 150ms ease",
    cursor: "pointer",
    ...(
      theme.unstable_sx({
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
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
    )
  };
  const hoverStyles = {
    color: color,
    ...(height && {
      boxShadow: `inset 0 -${height}px 0 0 ${colorInvert} !important`
    })
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

export default Button;