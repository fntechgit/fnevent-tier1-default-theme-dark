import * as React from "react";
import { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Markdown from "markdown-to-jsx";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Section } from "../Grid";
import useBoundingClientRect from "../../utils/hooks/useBoundingClientRect";

const defaultMarkdownOptions = {
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
        variant: "h4"
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
        variant: "p3"
      }
    }
  }
};

const OverlappingContentImageSection = ({
  title,
  image = null,
  content = null,
  markdownOptions = defaultMarkdownOptions
}) => {
  const [
    imageLoading,
    setImageLoading
  ] = useState(false);
  const [
    imageRef,
    imageBoundingClientRect
  ] = useBoundingClientRect();
  return (
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
          variant="hSection"
        >
          {title}
        </Typography>
      </Grid>
      { image &&
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
          imageLoading && {
            ref: imageRef
          }
        )}
      >
        <GatsbyImage
          image={getImage(image.src)}
          alt={image.alt ?? ""}
          onStartLoad={() => setImageLoading(true)}
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
          ...(imageBoundingClientRect && {
            position: {
              md: "absolute"
            },
            top: {
              md: `${imageBoundingClientRect.height*.94}px`
            }
          })
        }}
      >
        <Markdown
          options={markdownOptions}
        >
          {content}
        </Markdown>
      </Grid>
    </Section>
  );
};

export default OverlappingContentImageSection;
