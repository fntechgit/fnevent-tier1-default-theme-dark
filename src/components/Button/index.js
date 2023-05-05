import * as React from "react";
import BaseButton from "@mui/base/Button";
import { styled } from "@mui/system";
import useBoundingClientRect from "../../../src/utils/hooks/useBoundingClientRect";

const StyledButton = styled(BaseButton)(({
  theme,
  height
}) => {
  const defaultStyles = {
    color: "black",
    backgroundColor: "white",
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
    color: "white",
    ...(height && {
      boxShadow: `inset 0 -${height}px 0 0 black !important`
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