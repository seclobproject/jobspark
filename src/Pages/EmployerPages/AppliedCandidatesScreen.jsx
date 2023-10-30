import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import JobTitleCard from "../../Components/JobTitleCard";
import { Container } from "@mui/material";
import AppliedCandidateCard from "../../Components/AppliedCandidateCard";
import Footer from "../../Components/Footer";

const AppliedCandidatesScreen = () => {
  return (
    <Box>
      <Container>
        <JobTitleCard />
        <Box marginBottom={5}>
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <AppliedCandidateCard />
            </Grid>
            <Grid item lg={4}>
              <AppliedCandidateCard />
            </Grid>
            <Grid item lg={4}>
              <AppliedCandidateCard />
            </Grid>
            <Grid item lg={4}>
              <AppliedCandidateCard />
            </Grid>
            <Grid item lg={4}>
              <AppliedCandidateCard />
            </Grid>
            <Grid item lg={4}>
              <AppliedCandidateCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AppliedCandidatesScreen;
