import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import { Section } from "../../../../src/components/Grid";
import { RegisterButton, LoginButton } from "../../../../src/components/Button";
import OverlappingContentImageSection from "../../../../src/components/OverlappingContentImageSection";
import JoinCallToAction from "../../../../src/components/JoinCallToAction";
import Footer from "../../../../src/components/Footer";

import Link from "@openeventkit/event-site/src/components/Link";
import AttendanceTrackerComponent from "@openeventkit/event-site/src/components/AttendanceTrackerComponent";
import RegistrationLiteComponent from "@openeventkit/event-site/src/components/RegistrationLiteComponent";
import RegistrationLoginComponent from "@openeventkit/event-site/src/components/LoginButton";

import { PHASES } from "@openeventkit/event-site/src/utils/phasesUtils";

const pageStyles = {
  backgroundColor: "#000",
  color: "#fff"
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
      component: Typography,
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
  const {
    marketingPageJson: {
      hero,
      featuring,
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
          <RegisterButton>
            {registerButton.text}
          </RegisterButton>
        </RegistrationLiteComponent>
        }
        {loginButton.display && !isLoggedUser &&
        <RegistrationLoginComponent location={location}>
          <LoginButton>
            {loginButton.text}
          </LoginButton>
        </RegistrationLoginComponent>
        }
        { /* only show enter button if during summit and has virtual access */
        // TODO: remove underline from link text
         summitPhase >= PHASES.DURING && isLoggedUser && hasVirtualBadge &&
        <Link
          to={defaultPath}
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
            },
            position: "relative"
          }}
        >
          { hero.backgroundVideo &&
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            style={{
              top: 0,
              left: 0,
              position: "absolute",
              height: "100%",
              width: "100%",
              objectFit: "cover"
            }}
          >
            <source src={hero.backgroundVideo.publicURL} type="video/mp4" />
          </video>
          }
          <Grid
            xs={12}
            style={{
              textAlign: "center",
              zIndex: 1
            }}
          >
            <Typography
              variant="display1"
              align="center"
              textTransform="uppercase"
            >
              {hero.title}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              mt: {
                xs: 10.75,
                md: 12,
                lg: 16,
                xl: 20
              },
              zIndex: 1
            }}
          >
            <Typography
              variant="caption2"
              style={{
                display: "block",
                color: "white",
                zIndex: 1
              }}
            >
              {hero.leadTitle}
            </Typography>
            <Typography
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
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: {
                xs: "flex-start",
                md: "flex-end"
              },
              mt: {
                xs: 10.75,
                md: 12,
                lg: 16,
                xl: 20
              },
              // one above navbar
              //zIndex: 1101
              zIndex: 1
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
            >
              {getButtons()}
            </Stack>
          </Grid>
        </Section>
        <Section>
          <Grid
            xs={12}
            md={8}
          >
            <Typography
              variant="h1"
            >
              {featuring.title}
            </Typography>
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
            <Typography
              variant="pSection"
            >
              {featuring.content}
            </Typography>
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

export const Head = () => <title>Marketing Page</title>;
