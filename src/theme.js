import { createTheme } from "@mui/material/styles";

import RobloxRegular from "../static/fonts/Roblox/RobloxBETA-Regular.woff";
import RobloxBold from "../static/fonts/Roblox/RobloxBETA-Bold.woff";

// create breakpoints in intermediate theme
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1280,
    }
  }
});

// use breakpoints on theme creation
theme = createTheme(theme, {
  palette: {
    primary: {
      main: "#000",
    }
  },
  typography: {
    display1: {
      fontFamily: "Roblox-Bold",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 48,
            md: 76,
            lg: 92,
            xl: 120
          }
        })
      )
    },
    display2: {
      fontFamily: "Roblox-Bold",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      [theme.breakpoints.down("lg")]: {
        fontSize: 52
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 92
      }
    },
    h1: {
      fontFamily: "Roblox-Bold",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 32,
            md: 48,
            lg: 60,
            xl: 76
          }
        })
      )
    },
    h2: {
      fontFamily: "Roblox-Bold",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      [theme.breakpoints.up("xs")]: {
        fontSize: 24
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 32
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 48
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 60
      }
    },
    h3: {
      fontFamily: "Roblox-Bold",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      [theme.breakpoints.up("xs")]: {
        fontSize: 20
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 24
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 32
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 48
      }
    },
    h4: {
      fontFamily: "Roblox-Bold",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 20,
            lg: 24,
            xl: 32
          }
        })
      )
    },
    h5: {
      fontFamily: "Roblox-Bold",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      [theme.breakpoints.up("xs")]: {
        fontSize: 12
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 16
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 20
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 24
      }
    },
    p1: {
      fontFamily: "Roblox",
      color: "#fff",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      [theme.breakpoints.up("xs")]: {
        fontSize: 16
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 20
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 24
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 32
      },
      whiteSpace: "pre-line"
    },
    p2: {
      fontFamily: "Roblox",
      color: "#fff",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      [theme.breakpoints.up("xs")]: {
        fontSize: 14
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 16
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 20
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 24
      },
      whiteSpace: "pre-line"
    },
    p3: {
      fontFamily: "Roblox",
      color: "#fff",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 14,
            lg: 16,
            xl: 20
          }
        })
      ),
      whiteSpace: "pre-line"
    },
    caption1: {
      fontFamily: "Roblox-Bold",
      color: "#fff",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      [theme.breakpoints.down("lg")]: {
        lineHeight: 1,
        fontSize: 14
      },
      [theme.breakpoints.up("lg")]: {
        lineHeight: 1.25,
        fontSize: 16
      }
    },
    caption2: {
      fontFamily: "Roblox",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      [theme.breakpoints.down("lg")]: {
        lineHeight: 1,
        fontSize: 12
      },
      [theme.breakpoints.up("lg")]: {
        lineHeight: 1.25,
        fontSize: 14
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Roblox";
          src: local("Roblox"), url(${RobloxRegular}) format("woff");
        }
        @font-face {
          font-family: "Roblox-Bold";
          src: local("Roblox-Bold"), url(${RobloxBold}) format("woff");
        }
      `,
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "Roblox",
          ...(
            theme.unstable_sx({
              fontSize: {
                xs: 12,
                xl: 14
              }
            })
          ),
          borderRadius: 0
        }
      }
    }
  }
});

export default theme;