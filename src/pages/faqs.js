import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
//import { unstable_extendSxProp as extendSxProp } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import PageHeader from "../components/PageHeader";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";

const pageStyles = {
  backgroundColor: "#000"
};

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#000",
  boxShadow: "none",
  borderBottom: "1.5px solid white",
  "&:first-of-type": {
    borderTop: "1.5px solid white",
  },
  borderRight: 0,
  borderLeft: 0,
  padding: "10px 0",
  marginBottom: 0
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  /*expandIconWrapper: {
    transition: "none!important",
    "&.MuiSvgIcon-root": {
      transform: "none!important"
    }
  }*/
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: "8px 0px 20px"
}));

// const ExpandIcon = ({
//   expanded,
//   fontSize = "large"
// }) => {
//   const props = {
//     fontSize: fontSize
//   };
//   return (
//     <Box sx={{ p: 1, border: "2px solid black", color: "black" }}>
//       { expanded ? <RemoveIcon {...props} /> : <AddIcon {...props} /> }
//     </Box>
//   );
// };

const ExpandIcon = ({
  className,
  expanded
}) =>
  <Box className={className}>
    { expanded ? <RemoveIcon /> : <AddIcon /> }
  </Box>
;

const StyledExpandIcon = styled(ExpandIcon)(({ theme }) => ({
  padding: 10,
  paddingBottom: 6,
  border: "1.5px solid white",
  "& .MuiSvgIcon-root": {
    color: "white",
    fontSize: 20
  }
}));


const CategoryList = ({
  categories
}) =>
  <ul>
    {categories.map((category) =>
    <li>
        <Link
          underline="none"
          href={`#${category.title}`}
        >
          <h5>
            {category.title}
          </h5>
        </Link>
        <br/>
    </li>
    )}
  </ul>
;

const QuestionsAndAnswer = ({
  questionsAndAnswer
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledAccordion
      square
      elevation={0}
      disableGutters
      onChange={() => setExpanded(!expanded)}
    >
      <StyledAccordionSummary
        expandIcon={<StyledExpandIcon expanded={expanded} />}
        // sx={{
        //   "& .MuiAccordionSummary-expandIconWrapper": {
        //     transition: "none",
        //     "&.Mui-expanded": {
        //       transform: "none",
        //     }
        //   }
        // }}
      >
        <Typography variant="h4">
          {questionsAndAnswer.question}
        </Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <Typography variant="h5">
          {questionsAndAnswer.answer}
        </Typography>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

const CategoryQuestionsAndAnswers = ({
  questionsAndAnswers
}) => questionsAndAnswers.map((questionAndAnswer) => <QuestionsAndAnswer questionsAndAnswer={questionAndAnswer} />);

const CategorySection = ({ 
  category 
}) => (
  <>
    <Box sx={{ paddingBottom: 3 }}>
      <Typography id={category.title} variant="h2" gutterBottom>
        {category.title}
      </Typography>
    </Box>
    <Box sx={{ paddingBottom: 8 }}>
      <CategoryQuestionsAndAnswers
        questionsAndAnswers={category.questionsAndAnswers}
      />
    </Box>
  </>
);

const CategorySections = ({
  categories
}) => categories.map((category) => <CategorySection category={category} />);

const FAQsPage = ({
  data,
  location
}) => {
  const {
    faqsPageJson: {
      hero,
      categories
    }
  } = data;
  return (
    <div style={pageStyles}>
      <Navbar />
      <main>
        <PageHeader
          title={hero.title}
          lead={hero.lead}
          backgroundImage={hero.backgroundImage}
        />
        <Grid container spacing={2}>
          <Grid xs={12} sm={4} md={2}>
            <CategoryList categories={categories} />
          </Grid>
          <Grid xs={12} sm={8} md={10}>
            <CategorySections categories={categories} />
          </Grid>
        </Grid>
        <JoinCallToAction
          location={location}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default FAQsPage;

export const FAQsPageQuery = graphql`
  query {
    faqsPageJson {
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
      categories {
        title
        description
        questionsAndAnswers {
          question
          answer
        }
      }
    }
  }
`;

export const Head = () => <title>FAQ Page</title>;
