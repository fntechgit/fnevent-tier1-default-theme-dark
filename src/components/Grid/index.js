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
    sx={{
      m: 0
    }}
    {...rest}
  >
    {children}
  </Grid>
);

export const Section = styled(GridContainer)(({ theme }) =>
  theme.unstable_sx({
    px: {
      xs: 1,
      lg: 2,
      xl: 3
    },
    py: {
      xs: 4,
      md: 6,
      lg: 8,
      xl: 10
    }
  })
);
