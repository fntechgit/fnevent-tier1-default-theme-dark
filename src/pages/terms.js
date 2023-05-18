import * as React from "react";
import { graphql } from "gatsby";
import { Section } from "../components/Grid";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Markdown from "markdown-to-jsx";
import { AnimatedLink } from "../components/Link";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import PageHeader from "../components/PageHeader";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";

const pageStyles = {
  backgroundColor: "#000"
};

// trails 'href' prop to 'to' prop
const LinkWrapper = ({ href, ...props }) => (
  <AnimatedLink
    to={href}
    color="#00A2FF"
    hoverColor="#00A2FF"
    {...props}
  />
);

// trails 'href' prop to 'to' prop
const ListWrapper = ({ children }) => (
  <li>
    <Typography
      variant="pSection"
    >
      {children}
    </Typography>
  </li>
);

const markdownOptions = {
  forceBlock: true,
  overrides: {
    p: {
      component: Typography,
      props: {
        variant: "pSection",
        paragraph: true
      }
    },
    a: {
      component: LinkWrapper
    },
    li: {
      component: ListWrapper
    }
  }
};

const TermSection = ({
  title,
  contentMarkdown
}) => (
  <Section>
    <Grid
      xs={12}
    >
      <Typography
        variant="h1"
        sx={{
          whiteSpace: {
            md: "pre-line"
          }
        }}
      >
        {title}
      </Typography>
    </Grid>
    <Grid
      xs={12}
      md={8}
      mdOffset={2}
      lg={6}
      lgOffset={3}
      sx={{
        mt: {
          xs: 5,
          md: 6,
          lg: 8,
          xl: 10
        },
        ul: {
          mb: 2,
          pl: 4,
          listStyleType: "square",
          listStylePosition: "outside",
          color: "white",
          li: {
            pl: 1
          }
        }
      }}
    >
      <Markdown
        options={markdownOptions}
      >
        {contentMarkdown}
      </Markdown>
    </Grid>
  </Section>
);

const TermsSections = ({
  terms
}) => terms.map((term) => (
  <TermSection
    title={term.title}
    contentMarkdown={term.content}
  />
));

const TermsPage = ({
  data,
  location
}) => {
  const {
    termsPageJson: {
      hero,
      terms
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
        <TermsSections terms={terms} />
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
      terms {
        title
        content
      }
    }
  }
`;

export const Head = () => <title>Terms Page</title>;
