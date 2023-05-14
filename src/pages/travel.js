import * as React from "react";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { Section } from "../components/Grid";
import Typography from "@mui/material/Typography"
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import PageHeader from "../components/PageHeader";
import OverlappingContentImageSection from "../components/OverlappingContentImageSection";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";
import SvgIcon from "@mui/material/SvgIcon";

const pageStyles = {
  backgroundColor: "#000"
};

const markdownOptions = {
  forceBlock: true,
  overrides: {
    h4: {
      component: Typography,
      props: {
        variant: "hSectionContentTravelPage",
        sx: {
          pb: {
            xs: 4,
            md: 5
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

const Hotel = ({
  name,
  address
}) => {
  return (
    <Grid
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: {
          xs: 140,
          md: 190,
          lg: 230,
          xl: 270
        },
        p: "10px",
        border: "1px solid white"
      }}
    >
      <Typography
        variant="hTravelVenue"
      >
        {name}
      </Typography>
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
          style={{
            color: "white"
          }}
        >
          {address}
        </Typography>
        <SvgIcon
          viewBox="0 0 24 24"
          sx={{
            fontSize: 24,
            ml: 3
          }}
        >
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </SvgIcon>
      </Stack>
    </Grid>
  );
};

const Hotels = ({
  hotels
}) => (
  <Grid 
    xs={12}
    gap={5}
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(1, auto)",
        md: "repeat(2, 1fr)"
      },
      pt: {
        xs: 5,
        md: 6,
        lg: 10
      }
    }}
  >
  {hotels.map((hotel) =>
    <Hotel
      name={hotel.name}
      address={hotel.address}
    />
  )}
  </Grid>
);

const TravelPage = ({
  data,
  location
}) => {
  const {
    travelPageJson: {
      hero,
      venue,
      thingsToDo,
      accommodations
    }
  } = data;
  return (
    <div style={pageStyles}>
      <Navbar/>
      <main>
        <PageHeader
          title={hero.title}
          lead={hero.lead}
          backgroundImage={hero.backgroundImage}
        />
        {venue &&
        <Section>
          <Grid
            xs={12}
            md={8}
          >
            <Typography
              variant="hSection"
            >
              {venue.title}
            </Typography>
          </Grid>
          { venue.image &&
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
              image={getImage(venue.image.src)}
              alt={venue.image.alt ?? ""}
            />
          </Grid>
          }
          <Grid
            xs={12}
            md={6}
            mdOffset={6}
            lg={5}
            lgOffset={6}
            xl={4}
            xlOffset={7}
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
              {venue.content}
            </Markdown>
            {venue.address &&
            <Typography
              variant="caption2"
              sx= {{
                display: "block",
                color: "white",
                pt: {
                  xs: 4,
                  md: 5
                }
              }}
            >
              {venue.address}
            </Typography>
            }
          </Grid>
        </Section>
        }
        <OverlappingContentImageSection
          title={thingsToDo.title}
          image={thingsToDo.image}
          content={thingsToDo.content}
          markdownOptions={markdownOptions}
        />
        {accommodations &&
        <Section>
          <Grid
            xs={12}
            md={8}
          >
            <Typography
              variant="hSection"
            >
              {accommodations.title}
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
              {accommodations.content}
            </Typography>
          </Grid>
          {accommodations.hotels && accommodations.hotels.length > 0 &&
          <Hotels
            hotels={accommodations.hotels}
          />
          }
        </Section>
        }
        <JoinCallToAction
          location={location}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default TravelPage;

export const TravelPageQuery = graphql`
  query {
    travelPageJson {
      hero {
        title
        lead
        backgroundImage {
          src {
            childImageSharp {
              gatsbyImageData (
                quality: 100
              )
            }
          }
        }
      }
      venue {
        title
        image {
          src {
            childImageSharp {
              gatsbyImageData (
                quality: 100
              )
            }
          }
          alt
        }
        content
        address
      }
      thingsToDo {
        title
        image {
          src {
            childImageSharp {
              gatsbyImageData (
                quality: 100
              )
            }
          }
          alt
        }
        content
      }
      accommodations {
        title
        content
        hotels {
          name
          address
        }
      }
    }
  }
`;

export const Head = () => <title>Travel Page</title>;
