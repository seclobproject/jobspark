import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import RecentJobsCard from "../Components/RecentJobsCard";
import Footer from "../Components/Footer";

const SingleJobScreen = () => {
  return (
    <Box mt={4}>
      <Container>
        <Grid container>
          <Grid item lg={9}>
            <div className="job-title">
              <h1>Computer Operator Part Time/Data Entry Operator Fresher</h1>
              <p>Cyberpark, Calicut</p>
              <div>Full Time</div>
            </div>
          </Grid>
          <Grid item lg={3}>
            <img
              className="single-job-image"
              src="./images/job-image.png"
              alt="job-img"
            />
          </Grid>
        </Grid>
        <div className="job-description">
          <h6>Minumum Qualifications</h6>
          <ul>
            <li>
              High school diploma, secondary education level or equivalent
            </li>
            <li>Minimum of four years of related work experience</li>
          </ul>
        </div>
        <div className="job-description">
          <h6>Preferred Qualifications</h6>
          <ul>
            <li>
              Engineering graduate with 4 plus years' experience in plant
              operation preferably on SILO Machines or Diploma in electrical or
              instrumentation or mechanical with 7 to 8 years' experience.
            </li>
            <li>
              Prefer candidates from SILO Facilities under operations and
              maintenance department with SCADA/PLC Systems or can be from Any
              Feed Mills, Animal Nutrition Plants, Like Poultry OR Cattle feed
              Industries or FMCG. If not both, any core engineering industry
              under Operations & Maintenance Department having hand on
              experience on plant & machineries, CMMS/SAP etc.
            </li>
          </ul>
        </div>
      </Container>

      <div className="pay-apply-btn">
        <Container>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <div className="pay-amnt">₹1,000 - ₹2,000/day</div>
            </Grid>
            <Grid item>
              <button className="apply-btn">Apply Now</button>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container>
        <div className="job-description">
          <h6>Hiring Insights</h6>
          <ul>
            <li>Hiring 3 candidates for this role</li>
          </ul>
        </div>

        <div className="job-description">
          <h6>Job activity</h6>
          <ul>
            <li>Posted 1 day ago</li>
          </ul>
        </div>

        <Box marginY={3}>
          <h4 className="sub-heading">Recent Jobs</h4>
          <Grid container justifyContent={"space-between"}>

            <Grid item lg={3.8}>
              <RecentJobsCard />
            </Grid>

            <Grid item lg={3.8}>
              <RecentJobsCard />
            </Grid>
            
            <Grid item lg={3.8}>
              <RecentJobsCard />
            </Grid>

          </Grid>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default SingleJobScreen;
