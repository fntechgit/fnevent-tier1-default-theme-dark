import * as React from "react";
import { graphql } from "gatsby";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import PageHeader from "../components/PageHeader";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";

const pageStyles = {
  backgroundColor: "#000"
};

const TermsPage = ({
  data,
  location
}) => {
  const {
    termsPageJson: {
      hero
    }
  } = data;
  return (
    <div style={pageStyles}>
      <Navbar/>
      <main>
        <PageHeader
          title={hero.title}
          leadMarkdown={hero.lead}
          backgroundImage={hero.backgroundImage}
        />
        <JoinCallToAction
          location={location}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default TermsPage;

export const TermsPageQuery = graphql`
  query {
    termsPageJson {
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
    }
  }
`;

export const Head = () => <title>Terms Page</title>;
