import { createTheme } from "@mui/material/styles";

import RobloxRegular from "../static/fonts/Roblox/RobloxBETA-Regular-v1.007.otf";
import RobloxBoldExtended from "../static/fonts/Roblox/RobloxDisplayBETA-BoldExtended-v1.001.otf";

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
      fontFamily: "Roblox-BoldExtended",
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
    h1: {
      fontFamily: "Roblox-BoldExtended",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      whiteSpace: "pre-line",
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
      fontFamily: "Roblox-BoldExtended",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 24,
            md: 32,
            lg: 48,
            xl: 60
          }
        })
      )
    },
    // custom to set specific size in sections header
    // since proposal has different tags for each breakpoint
    hSectionContent: {
      display: "block",
      fontFamily: "Roblox-BoldExtended",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 20,
            md: 24,
            xl: 32
          }
        })
      )
    },
    h3: {
      fontFamily: "Roblox-BoldExtended",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 20,
            md: 24,
            lg: 32,
            xl: 48
          }
        })
      )
    },
    h4: {
      fontFamily: "Roblox-BoldExtended",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 16,
            md: 20,
            lg: 24,
            xl: 32
          }
        })
      )
    },
    h5: {
      fontFamily: "Roblox-BoldExtended",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 12,
            md: 16,
            lg: 20,
            xl: 24
          }
        })
      )
    },
    p1: {
      fontFamily: "Roblox",
      color: "#fff",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      whiteSpace: "pre-line",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 18,
            md: 20,
            lg: 24,
            xl: 32
          }
        })
      )
    },
    p2: {
      fontFamily: "Roblox",
      color: "#fff",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      whiteSpace: "pre-line",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 16,
            // lg value in figma is actually 24
            lg: 20,
            xl: 24
          }
        })
      )
    },
    p3: {
      fontFamily: "Roblox",
      color: "#fff",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      whiteSpace: "pre-line",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 14,
            lg: 20
          }
        })
      )
    },
    // custom to set specific size in terms page
    // since proposal has different tags for each breakpoint
    pSection: {
      fontFamily: "Roblox",
      color: "#fff",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      whiteSpace: "pre-line",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 16,
            xl: 20
          }
        })
      )
    },
    caption1: {
      fontFamily: "Roblox-BoldExtended",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 14,
            lg: 16
          }
        })
      )
    },
    caption2: {
      fontFamily: "Roblox-BoldExtended",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      ...(
        theme.unstable_sx({
          fontSize: {
            xs: 12,
            lg: 14
          }
        })
      )
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Roblox";
          src: local("Roblox"), url(${RobloxRegular});
        }
        @font-face {
          font-family: "Roblox-BoldExtended";
          src: local("Roblox-BoldExtended"), url(${RobloxBoldExtended});
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