import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ApplicationHistoryComp from "../Components/ApplicationHistoryComp";
import CompanyJobsComp from "../Components/CompanyJobsComp";
import Footer from "../Components/Footer";

const CompanyProfileScreen = () => {
  return (
    <Box>
      {/* Banner */}
      <div className="banner-box">
        <img src="./images/banner-image.jpeg" alt="banner-img" />
        <div className="banner-text banner-text-applied" text-align={"end"}>
          <h3 className="welcome-to-banner">Welcome to</h3>
          <h1 className="seclob-jobs-banner">Seclob Jobs</h1>
        </div>
      </div>
      {/* Banner */}

      <Container>
        <div className="application-history">
          <h3>
            <u>Your jobs</u>
          </h3>
        </div>
        <Box>
          <CompanyJobsComp />
          <CompanyJobsComp />
          <CompanyJobsComp />
          <CompanyJobsComp />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default CompanyProfileScreen;
