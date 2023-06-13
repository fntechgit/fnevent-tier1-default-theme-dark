import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import AnimatedTypography from "../../../../src/components/AnimatedTypography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import { Section } from "../../../../src/components/Grid";
import AttendCarousel from "../../../../src/components/AttendCarousel";
import { RegisterButton, LoginButton } from "../../../../src/components/Button";
import OverlappingContentImageSection from "../../../../src/components/OverlappingContentImageSection";
import JoinCallToAction from "../../../../src/components/JoinCallToAction";
import Footer from "../../../../src/components/Footer";

import Link from "../../../../src/components/Link";
import AttendanceTrackerComponent from "@openeventkit/event-site/src/components/AttendanceTrackerComponent";
import RegistrationLiteComponent from "@openeventkit/event-site/src/components/RegistrationLiteComponent";
import RegistrationLoginComponent from "@openeventkit/event-site/src/components/LoginButton";

import { PHASES } from "@openeventkit/event-site/src/utils/phasesUtils";

const pageStyles = {
  backgroundColor: "#000"
};

const markdownOptions = {
  forceBlock: true,
  overrides: {
    h4: {
      component: Typography,
      props: {
        variant: "hSectionContent",
        sx: {
          pb: {
            xs: 2,
            md: 3,
            lg: 4
          }
        }
      }
    },
    p: {
      component: AnimatedTypography,
      props: {
        variant: "pSection",
      }
    }
  }
};

const MarketingPageTemplate = ({
  location,
  data,
  summit,
  summitPhase,
  doLogin,
  isLoggedUser,
  hasVirtualBadge,
  defaultPath,
  ...rest
}) => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));
  const {
    marketingPageJson: {
      hero,
      featuring,
      attend,
      awards
    }
  } = data;
  const getButtons = () => {
    const {
      buttons: {
        registerButton,
        loginButton
      }
    } = hero;
    return (
      <>
        {registerButton.display &&
        <RegistrationLiteComponent>
          <RegisterButton
            sx={{
              flexBasis: {
                xs: isLoggedUser ? "100%" : "50%",
                md: "unset"
              }
            }}
          >
            {registerButton.text}
          </RegisterButton>
        </RegistrationLiteComponent>
        }
        {loginButton.display && !isLoggedUser &&
        <RegistrationLoginComponent
          location={location}
          style={{
            flexBasis: matchesXs ? "50%" : "unset"
          }}
        >
          <LoginButton>
            {loginButton.text}
          </LoginButton>
        </RegistrationLoginComponent>
        }
        { /* only show enter button if during summit and has virtual access */
         summitPhase >= PHASES.DURING && isLoggedUser && hasVirtualBadge &&
        <Link
          to={defaultPath}
          style={{
            flexBasis: matchesXs ? "50%" : "unset",
            textDecoration: "none"
          }}
        >
          <LoginButton>
            Enter
          </LoginButton>
        </Link>
        }
      </>
    );
  };
  return (
    <div style={pageStyles}>
      <Navbar />
      <main>
        <AttendanceTrackerComponent/>
        <Section
          sx={{
            position: "relative",
            overflow: "hidden",
            pt: {
              xs: 6,
              md: 12,
              lg: 16,
              xl: 20
            },
            pb: {
              xs: 6,
              lg: 8,
              xl: 10
            }
          }}
        >
          {hero.backgroundVideo &&
          <Box
            component="video"
            preload="auto"
            playsInline
            autoPlay
            loop
            sx={{
              position: "absolute",
              margin: "auto",
              inset: 0,
              top: {
                xs: "-48%",
                md: "-22%",
                xl: "-28%"
              },
              left: {
                sm: 16,
                md: 24,
                lg: 32,
                xl: 40
              }
            }}
          >
            <source src={hero.backgroundVideo.publicURL} type="video/mp4"/>
          </Box>
          }
          <Grid
            xs={12}
            style={{
              position: "relative",
              textAlign: "center"
            }}
          >
            <AnimatedTypography
              variant="display1"
              align="center"
              textTransform="uppercase"
            >
              {hero.title}
            </AnimatedTypography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              position: "relative",
              mt: {
                xs: 4,
                md: 12,
                lg: 16,
                xl: 20
              }
            }}
          >
            <AnimatedTypography
              variant="caption2"
              style={{
                display: "block",
                color: "white",
                zIndex: 1
              }}
            >
              {hero.leadTitle}
            </AnimatedTypography>
            <AnimatedTypography
              variant="p1"
              sx={{
                display: "block",
                mt: {
                  xs: 1,
                  lg: 2
                },
                zIndex: 1
              }}
            >
              {hero.lead}
            </AnimatedTypography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: {
                xs: "flex-start",
                md: "flex-end"
              },
              mt: {
                xs: 5,
                md: 12,
                lg: 16,
                xl: 20
              }
            }}
          >
            <Stack
              direction="row"
              spacing={{
                xs: 2,
                md: 3,
                lg: 4,
                xl: 5
              }}
              sx={{
                flex: {
                  xs: 1,
                  md: "unset"
                }
              }}
            >
              {getButtons()}
            </Stack>
          </Grid>
        </Section>
        <Section>
          <Grid
            xs={12}
            md={8}
            lg={9}
          >
            <AnimatedTypography
              variant="h1"
            >
              {featuring.title}
            </AnimatedTypography>
          </Grid>
          { featuring.image &&
          <Grid
            xs={12}
            sx={{
              mt: {
                xs: 4,
                md: 6,
                lg: 8,
                xl: 10
              }
            }}
          >
            <GatsbyImage
              image={getImage(featuring.image.src)}
              alt={featuring.image.alt ?? ""}
            />
          </Grid>
          }
          <Grid
            xs={12}
            md={6}
            mdOffset={6}
            lg={4}
            lgOffset={7}
            sx={{
              mt: {
                xs: 4,
                md: 6,
                lg: 8,
                xl: 10
              }
            }}
          >
            <AnimatedTypography
              variant="pSection"
            >
              {featuring.content}
            </AnimatedTypography>
          </Grid>
        </Section>
        <Section>
          <Grid
            xs={12}
          >
            <AnimatedTypography
              variant="h1"
            >
              {attend.title}
            </AnimatedTypography>
            <AttendCarousel
              data={attend.benefits}
            />
          </Grid>
        </Section>
        <OverlappingContentImageSection
          title={awards.title}
          image={awards.image}
          content={awards.content}
          markdownOptions={markdownOptions}
        />
        <JoinCallToAction
          location={location}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default MarketingPageTemplate;
