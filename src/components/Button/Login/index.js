import * as React from "react";
import Button from "../";
import Typography from "@mui/material/Typography";

const LoginButton = ({
  onClick = () => {},
  children
}) => (
  <Button
    onClick={onClick}
    variant="invert"
  >
    <Typography
        variant="caption2"
      >
      {children}
    </Typography>
  </Button>
);

export default LoginButton;
