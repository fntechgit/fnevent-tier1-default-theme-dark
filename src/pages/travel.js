import * as React from "react";
import { graphql } from "gatsby";
import Typography from "@mui/material/Typography"
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import PageHeader from "../components/PageHeader";
import OverlappingContentImageSection from "../components/OverlappingContentImageSection";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";

const pageStyles = {
  backgroundColor: "#000"
};

const markdownOptions = {
  forceBlock: true,
  overrides: {
    p: {
      component: Typography,
      props: {
        variant: "pSection"
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
