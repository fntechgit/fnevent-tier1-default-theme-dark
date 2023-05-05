import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

export const GridContainer = ({
  children,
  ...rest
}) => (
  <Grid
    container
    columnSpacing={{
      xs: 2,
      md: 3,
      lg: 4,
      xl: 5
    }}
    {...rest}
  >
    {children}
  </Grid>
);

export const Section = styled(GridContainer)(({ theme }) =>
  theme.unstable_sx({
    px: {
      xs: 2,
      md: 4,
      lg: 6,
      xl: 8
    },
    py: {
      xs: 4,
      md: 6,
      lg: 8,
      xl: 10
    }
  })
);

// [theme.breakpoints.up("xs")]: {
//   padding: "32px 16px"
// },
// [theme.breakpoints.up("md")]: {
//   padding: "48px 24px"
// },
// [theme.breakpoints.up("lg")]: {
//   padding: "64px 32px"
// },
// [theme.breakpoints.up("xl")]: {
//   padding: "80px 40px"
// }