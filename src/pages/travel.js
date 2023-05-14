import * as React from "react";
import { graphql } from "gatsby";
import Typography from "@mui/material/Typography"
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import PageHeader from "../components/PageHeader";
import OverlappingContentImageSection from "../components/OverlappingContentImageSection";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";


import Markdown from "markdown-to-jsx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Unstable_Grid2";
import { Section } from "../components/Grid";

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

const TravelPage = ({
  data,
  location
}) => {
  const {
    travelPageJson: {
      hero,
      venue,
      thingsToDo
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
    }
  }
`;

export const Head = () => <title>Travel Page</title>;
