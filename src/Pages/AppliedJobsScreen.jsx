import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import ApplicationHistoryComp from "../Components/ApplicationHistoryComp";
import Footer from "../Components/Footer";

const AppliedJobsScreen = () => {
  return (
    <Box>
      {/* Banner */}
      <div className="banner-box">
        <img src="./images/banner-image.jpeg" alt="banner-img" />
        <div className="banner-text banner-text-applied">
          <h1>Application History</h1>
        </div>
      </div>
      {/* Banner */}
      <Container>
        <div className="application-history">
          <h3>
            <u>Your Application History</u>
          </h3>
        </div>
        <Box>
          <ApplicationHistoryComp />
          <ApplicationHistoryComp />
          <ApplicationHistoryComp />
          <ApplicationHistoryComp />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AppliedJobsScreen;
