import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section } from "../Grid";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Markdown from "markdown-to-jsx";
import { AnimatedLink } from "../Link";

// trails 'href' prop to 'to' prop
const LinkWrapper = ({ href, ...props }) => (
  <AnimatedLink
    to={href}
    color="#00A2FF"
    hoverColor="#00A2FF"
    {...props}
  />
);

const markdownOptions = {
  forceBlock: true,
  overrides: {
    p: {
      component: Typography,
      props: {
        variant: "p2"
      }
    },
    a: {
      component: LinkWrapper
    }
  }
};

const PageHeader = ({
  title,
  lead,
  backgroundImage
}) => (
  <Section
    style={{
      position: "relative"
    }}
  >
  	{backgroundImage &&
    <GatsbyImage
      image={getImage(backgroundImage.src)}
      style={{
        position: "absolute",
        inset: 0,
        objectFit: "cover",
        opacity: 0.4,
        pointerEvents: "none"
      }}
      alt={backgroundImage.alt ?? "Page header image"}
    />
  	}
    <Grid
      xs={12}
      sx={{
        zIndex: 1
      }}
    >
      <Typography
        variant="display1"
        whiteSpace="pre-line"
      >
        {title}
      </Typography>
    </Grid>
    <Grid
      xs={12}
      md={6}
      mdOffset={6}
      lg={4}
      lgOffset={7}
      sx={{
        mt: {
        	xs: 5,
        	md: 6,
        	lg: 8,
        	xl: 10
        },
        zIndex: 1
      }}
    >
      <Markdown
        options={markdownOptions}
      >
        {lead}
      </Markdown>
    </Grid>
  </Section>
);

export default PageHeader;