import { graphql } from "gatsby";
import MarketingPage from "virtualevent/src/templates/marketing-page";

export const marketingPageQuery = graphql`
  query MarketingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default MarketingPage;