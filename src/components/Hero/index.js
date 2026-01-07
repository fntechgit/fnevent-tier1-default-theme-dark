import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import { Section } from "../Grid";
import { getMediaFileType, MEDIA_TYPES } from "../../utils/helpers";

const Hero = ({
  backgroundMedia,
  children,
  sx = {},
  ...rest
}) => {
  return (
    <Box sx={{ position: "relative", ...sx }} {...rest}>
      {backgroundMedia &&
      <>
        {getMediaFileType(backgroundMedia.publicURL) === MEDIA_TYPES.VIDEO ?
          <Box
            component="video"
            preload="auto"
            playsInline
            autoPlay
            muted
            loop
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          >
            <source src={backgroundMedia.publicURL} type="video/mp4"/>
          </Box>
        :
          <Box
            component={GatsbyImage}
            image={getImage(backgroundMedia.childImageSharp)}
            alt={""}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              "& img": {
                objectFit: "cover"
              }
            }}
          />
        }
      </>
      }
      <Section
        sx={{
          position: "relative",
          pt: {
            xs: 6,
            md: 12,
            lg: 16,
            xl: 20
          },
          pb: 0
        }}
      >
        {children}
      </Section>
    </Box>
  );
};

export default Hero;
