import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "../";
import SvgIcon from "@mui/material/SvgIcon";

const RegisterButton = ({
  onClick = () => {},
  children
}) => (
  <Button
    onClick={onClick}
  >
    <Stack
      direction="row"
      spacing={0}
      sx={{
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "space-between"
      }}
    >
      <Typography
        variant="caption2"
        sx={{
          width: "50%",
          textAlign: "left"
        }}
      >
        {children}
      </Typography>
      <SvgIcon
        viewBox="0 0 15 15"
        sx={{
          fontSize: {
            xs: 10,
            lg: 15
          }
        }}
      >
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 13L13.3208 1.6792" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
          <path d="M2.67969 1H14.0004V12.3208" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
      </SvgIcon>
    </Stack>
  </Button>
);

export default RegisterButton;