import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Icons from "../Components/Icons";
import Grid from "@mui/material/Grid";
import HomeScreenJobCard from "../Components/HomeScreenJobCard";
import Footer from "../Components/Footer";

const HomeScreen = () => {
  return (
    <Box>

      {/* Banner */}
      <div className="banner-box">
        <img src="./images/banner-image.jpeg" alt="banner-img" />
        <div class="banner-text">
          <h1>Explore your jobs!</h1>
          <div className="search-field-div">
            <img src="./images/search 1.png" alt="search-icon" />
            <input type="text" placeholder="job title, keywords or company" />
            <button>Explore</button>
          </div>
        </div>
      </div>
      {/* Banner */}

      {/* Icons */}
      <Container>
        <div className="icons-main-div">
          <Grid container spacing={2}>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
            <Grid item lg={1.5}>
              <Icons />
            </Grid>
          </Grid>
        </div>
      </Container>
      {/* Icons */}

      {/* Jobs */}
      <div className="job-cards">
        <Container>
          <div className="jobcard-main-div">
            <Grid container justifyContent={"space-around"}>
              <Grid item lg={5.5}>
                <HomeScreenJobCard />
              </Grid>
              <Grid item lg={5.5}>
                <HomeScreenJobCard />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      {/* Jobs */}

      <Footer />
    </Box>
  );
};

export default HomeScreen;
