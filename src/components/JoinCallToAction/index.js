import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section } from "../Grid";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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
      <GatsbyImage
        image={getImage(backgroundImage.src)}
        style={{
          top: 0,
          left: 0,
          position: "absolute",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          opacity: 0.8
        }}
      />
      <Grid
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          zIndex: 1
        }}
      >
        <Typography
          variant="h1"
          align="center"
          textTransform="uppercase"
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: {
            xs: 4,
            lg: 6
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