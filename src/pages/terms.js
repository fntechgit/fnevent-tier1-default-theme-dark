import * as React from "react";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";

const pageStyles = {
  backgroundColor: "#000"
};

const TermsPage = ({
  location
}) => {
  return (
    <div style={pageStyles}>
      <Navbar />
      <main>
        <JoinCallToAction
          location={location}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default TermsPage;

export const Head = () => <title>Terms Page</title>;
