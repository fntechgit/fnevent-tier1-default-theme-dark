import * as React from "react";
//import Ad from 'virtualevent/src/components/Ad';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

const MarketingPageTemplate = ({ summit, ...rest }) => {
  console.log(rest);
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
        <br />
        <span style={headingAccentStyles}>— for your summit! <pre>{JSON.stringify(summit, null, 2)}</pre></span>
      </h1>
      {/*
      <Ad
        text={"This is an ad"}
        link={"https://www.google.com"}
      />
      */}
    </main>
  );
};

export default MarketingPageTemplate;

export const Head = () => <title>Marketing Page</title>;
