import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GridContainer } from "../../components/Grid";
import Link from "@openeventkit/event-site/src/components/Link";

const footerQuery = graphql`
  query {
    footerJson {
      social {
        src {
          childImageSharp {
            gatsbyImageData (
              quality: 100
            )
          }
        }
        alt
        link
      }
      links {
        text
        link
      }
      logo {
        src {
          childImageSharp {
            gatsbyImageData (
              quality: 100
              placeholder: NONE
            )
          }
        }
        alt
        link
      }
    }
  }
`;

const SocialNetworks = styled(GridContainer)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    // 32 - 4 ((rowSpacing 1)/2)
    marginTop: 28
  },
  [theme.breakpoints.down("lg")]: {
    // 48 - 4 ((rowSpacing 1)/2)
    marginTop: 44
  },
  [theme.breakpoints.down("xl")]: {
    // 64 - 4 ((rowSpacing 1)/2)
    marginTop: 60
  },
  [theme.breakpoints.up("xl")]: {
    // 80 - 4 ((rowSpacing 1)/2)
    marginTop: 76
  }
}));

const NetworkLinkItem = styled(Grid)(({ theme }) => ({
  //backgroundColor: "red"
}));

const NetworkLink = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 60,
  width: 60,
  img: {
    height: 24,
    width: 24
  },
  "&:hover": {
    backgroundColor: "white"
  },
  "&:hover img": {
    filter: "invert(1)"
  }
}));

const FooterLinks = styled(GridContainer)(({ theme }) => ({
  justifyContent: "center",
  textTransform: "uppercase",
  color: "white",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    marginTop: 8
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: 32
  },
  [theme.breakpoints.down("xl")]: {
    marginTop: 32
  },
  [theme.breakpoints.up("xl")]: {
    marginTop: 40
  }
}));

const FooterLinkItem = styled(Grid)(({ theme }) => ({
  //backgroundColor: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    minHeight: 32,
    minWidth: 144,
  },
  [theme.breakpoints.down("lg")]: {
    maxHeight: 14,
  },
  [theme.breakpoints.up("lg")]: {
    maxHeight: 16,
  }
}));

const LogoContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("xs")]: {
    paddingTop: 48,
    paddingBottom: 32
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: 48,
    paddingBottom: 48
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: 64,
    paddingBottom: 64
  },
  [theme.breakpoints.up("xl")]: {
    paddingTop: 80,
    paddingBottom: 80
  }
}));

const Logo = styled(Grid)(({ theme }) => ({
  //backgroundColor: "red",
  [theme.breakpoints.down("md")]: {
    height: 16,
    width: 88.53
  },
  [theme.breakpoints.up("md")]: {
    height: 24,
    width: 132.8
  }
}));

const Footer = () => {
  const {
    footerJson: {
      social,
      links,
      logo
    }
  } = useStaticQuery(footerQuery);
  return (
    <div style={{backgroundColor: "#000"}}>
      <SocialNetworks
        container
        rowSpacing={1}
      >
        {social?.map((network, index) => (
          <NetworkLinkItem key={index}>
            {network.link ?
            <NetworkLink to={network.link}>
              <GatsbyImage
                image={getImage(network.src)}
                alt={network.alt ?? ""}
              />
            </NetworkLink>
            :
            <GatsbyImage
              image={getImage(network.src)}
              alt={network.alt ?? ""}
            />
            }
          </NetworkLinkItem>
        ))}
      </SocialNetworks>
      <FooterLinks
        rowSpacing={0}
      >
        {links?.map((link, index) => (
        <FooterLinkItem key={index}>
          {link.link ?
          <Link to={link.link}>
            <Typography
              variant="caption2"
              style={{
                color: "white",
              }}
            >
              {link.text}
            </Typography>
          </Link>
          :
          <Typography
            variant="caption2"
            style={{
              color: "white",
            }}
          >
            {link.text}
          </Typography>
          }
        </FooterLinkItem>
        ))}
      </FooterLinks>
      <LogoContainer
        container
        spacing={0}
      >
        <Logo>
          {logo.link ?
          <Link to={logo.link}>
            <GatsbyImage
              image={getImage(logo.src)}
              alt={logo.alt ?? ""}
            />
          </Link>
          :
          <GatsbyImage
            image={getImage(logo.src)}
            alt={logo.alt ?? ""}
          />
          }
        </Logo>
      </LogoContainer>
    </div>
  );
};

export default Footer;
