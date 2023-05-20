import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section } from "../Grid";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import AnimatedTypography from "../AnimatedTypography";
import { RegisterButton, LoginButton } from "../Button";
import RegistrationLiteComponent from "@openeventkit/event-site/src/components/RegistrationLiteComponent";
import RegistrationLoginComponent from "@openeventkit/event-site/src/components/LoginButton";
import useMarketingPageData from "../../utils/hooks/useMarketingPageData";

const JoinCallToAction = ({
  location
}) => {
  const {
    callToAction: {
      display,
      title,
      backgroundImage,
      buttons: {
        registerButton,
        loginButton
      }
    }
  } = useMarketingPageData();
  if (!display) return null;
  return (
    <Section
      sx={{
        position: "relative",
        py: {
          xs: 2,
          md: 4,
          lg: 10
        },
        mx: {
          xs: 2,
          md: 3,
          lg: 4,
          xl: 5
        },
        my: {
          xs: 4.5,
          md: 6.5,
          lg: 8.5,
          xl: 10.5
        }
      }}
    >
      {backgroundImage &&
      <GatsbyImage
        image={getImage(backgroundImage.src)}
        style={{
          position: "absolute",
          inset: 0,
          objectFit: "cover",
          opacity: 0.8,
          pointerEvents: "none"
        }}
        alt={backgroundImage.alt ?? ""}
      />
      }
      <Grid
        xs={12}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <AnimatedTypography
          variant="h1"
          align="center"
          textTransform="uppercase"
        >
          {title}
        </AnimatedTypography>
      </Grid>
      <Grid
        xs={12}
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: {
            xs: 4,
            lg: 6
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
        >
          {registerButton.display &&
          <RegistrationLiteComponent>
            <RegisterButton>
              {registerButton.text}
            </RegisterButton>
          </RegistrationLiteComponent>
          }
          {loginButton.display &&
          <RegistrationLoginComponent location={location}>
            <LoginButton>
              {loginButton.text}
            </LoginButton>
          </RegistrationLoginComponent>
          }
        </Stack>
      </Grid>
    </Section>
  );
};

export default JoinCallToAction;