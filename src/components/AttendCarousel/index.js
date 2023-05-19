import * as React from "react";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

import { Swiper, SwiperSlide } from "swiper/react";

import Navigation from "./Navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const AttendCarousel = ({
  data
}) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("md"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const slidesPerView = xs ? 1 : md ? 2 : 3;
  const spaceBetween = md ? 24 : lg ? 32 : 40;
  return (
    <Box
      component={Swiper}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      sx={{
        mt: {
          xs: 4,
          md: 6,
          lg: 8,
          xl: 10
        }
      }}
    >
      {data.map((item, i) => (
        <SwiperSlide
          key={i}
          backfaceVisibility="hidden"
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                ...(item.backgroundImage && {
                  backgroundImage: `url("${getSrc(item.backgroundImage.src)}")`,
                  backgroundSize: "cover"
                })
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  width: "100%",
                  pt: {
                    xs: 2.5,
                    md: 3,
                    xl: 3.5
                  },
                  px: {
                    xs: 2,
                    md: 3,
                    xl: 4
                  },
                  pb: {
                    xs: 2,
                    lg: 2.5
                  }
                }}
              >
                <Box
                  sx={{
                    height: 0,
                    border: "1px dashed rgba(255, 255, 255, 0.5)",
                    flex: "none",
                    order: 1,
                    flexGrow: 1,
                    alignSelf: "center",
                    ml: {
                      xs: 2,
                      md: 3,
                      xl: 4
                    }
                  }}
                />
                <Typography
                  variant="caption2"
                >
                  {item.concept}
                </Typography>
              </Stack>
              {item.foregroundImage &&
              <Box
                component={GatsbyImage}
                image={getImage(item.foregroundImage.src)}
                alt={item.foregroundImage.alt ?? ""}
                sx={{
                  mx: {
                    xs: 2,
                    md: 3,
                    xl: 4
                  }
                }}
              />
              }
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  width: "100%",
                  pb: {
                    xs: 2.5,
                    md: 3,
                    xl: 3.5
                  },
                  px: {
                    xs: 2,
                    md: 3,
                    xl: 4
                  },
                  pt: {
                    xs: 2,
                    lg: 2.5
                  }
                }}
              >
                <Box
                  sx={{
                    height: 0,
                    border: "1px dashed rgba(255, 255, 255, 0.5)",
                    flex: "none",
                    order: 0,
                    flexGrow: 1,
                    alignSelf: "center",
                    mr: {
                      xs: 2,
                      md: 3,
                      xl: 4
                    }
                  }}
                />
                <Typography
                  variant="caption2"
                >
                  {item.concept}
                </Typography>
              </Stack>
            </Box>
            <Typography
              variant="pSection"
              sx={{
                pt: {
                  xs: 4,
                  md: 5
                }
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
      <Navigation/>
    </Box>
  )
};

export { Navigation };

export default AttendCarousel;
