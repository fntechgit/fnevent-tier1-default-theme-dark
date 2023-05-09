import * as React from "react";
import { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Markdown from "markdown-to-jsx";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import { Section } from "../../../../src/components/Grid";
import Button from "../../../../src/components/Button";
import Footer from "../../../../src/components/Footer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import useBoundingClientRect from "../../../../src/utils/hooks/useBoundingClientRect";

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
    h1: {
      component: Typography,
      props: {
        variant: "h1"
      }
    },
    h2: {
      component: Typography,
      props: {
        variant: "h2"
      }
    },
    h3: {
      component: Typography,
      props: {
        variant: "h3"
      }
    },
    h4: {
      component: Typography,
      props: {
        variant: "h4",
        sx: {
          pb: {
            xs: 2,
            md: 3,
            lg: 4
          }
        }
      }
    },
    h5: {
      component: Typography,
      props: {
        variant: "h5"
      }
    },
    p: {
      component: Typography,
      props: {
        variant: "p3",
      }
    }
  }
};

export const RegisterNowButton = ({
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
      <ArrowOutwardIcon
        sx={{
          fontSize: {
            xs: 18,
            lg: 27
          }
        }}
      />
    </Stack>
  </Button>
);

export const LoginButton = ({
  onClick = () => {},
  children
}) => (
  <Button
    onClick={onClick}
  >
    <Typography
        variant="caption2"
      >
      {children}
    </Typography>
  </Button>
);

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
  const [
    celebrateImageLoading,
    setCelebrateImageLoading
  ] = useState(false);
  const [
    celebrateImageRef,
    celebrateImageBoundingClientRect
  ] = useBoundingClientRect();
  const {
    marketingPageJson: {
      hero,
      featuring,
      celebrate
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
        { registerButton.display &&
        <RegistrationLiteComponent>
          <RegisterNowButton>
            {registerButton.text}
          </RegisterNowButton>
        </RegistrationLiteComponent>
        }
        { loginButton.display && !isLoggedUser &&
        <RegistrationLoginComponent location={location}>
          <LoginButton>
            {loginButton.text}
          </LoginButton>
        </RegistrationLoginComponent>
        }
        { /* only show enter button if during summit and has virtual access */
        // TODO: remove underline from link text
        // TODO: remove comment
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
    <>
      <Navbar />
      <main style={pageStyles}>
        {
          // TODO: remove comment
          //<AttendanceTrackerComponent/>
        }
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
            position: "relative",
            overflow: "hidden"
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
              align= "center"
              style={{
                textTransform: "uppercase"
              }}
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
              zIndex: 1
            }}
          >
            <Stack
              direction="row"
              spacing={{
                xs: 2,
                md: 3,
                lg: 4,
                // TODO: check if value in figma is correct
                //xl: 3
              }}
            >
              { getButtons() }
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
            <Markdown
              options={markdownOptions}
            >
              {featuring.content}
            </Markdown>
          </Grid>
        </Section>
        <Section
          style={{
            position: "relative"
          }}
        >
          <Grid
            xs={12}
            md={8}
          >
            <Typography
              variant="h1"
            >
              {celebrate.title}
            </Typography>
          </Grid>
          { celebrate.image &&
          <Grid
            xs={12}
            md={9}
            mdOffset={3}
            lg={10}
            lgOffset={2}
            sx= {{
              pt: {
                xs: 5,
                md: 6,
                lg: 10
              }
            }}
            {...(
              celebrateImageLoading && {
                ref: celebrateImageRef
              }
            )}
          >
            <GatsbyImage
              image={getImage(celebrate.image.src)}
              alt={celebrate.image.alt ?? ""}
              onStartLoad={() => setCelebrateImageLoading(true)}
            />
          </Grid>
          }
          <Grid
            xs={12}
            md={6}
            lg={4}
            lgOffset={1}
            sx={{
              mt: {
                xs: 5,
                md: 0
              },
              ...(celebrateImageBoundingClientRect && {
                position: {
                  md: "absolute"
                },
                top: {
                  md: `${celebrateImageBoundingClientRect.height*.94}px`
                }
              })
            }}
          >
            <Markdown
              options={markdownOptions}
            >
              {celebrate.content}
            </Markdown>
          </Grid>
        </Section>
        <Footer/>
      </main>
    </>
  );
};

export default MarketingPageTemplate;

export const Head = () => <title>Marketing Page</title>;
