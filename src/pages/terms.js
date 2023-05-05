import * as React from "react";
import Navbar from "@openeventkit/event-site/src/components/Navbar";

const pageStyles = {
  backgroundColor: "#000",
  height: "100vh"
};

const TermsPage = () => {
  return (
    <>
      <Navbar />
      <main style={pageStyles}>
      </main>
    </>
  );
};

export default TermsPage;

export const Head = () => <title>Terms Page</title>;
