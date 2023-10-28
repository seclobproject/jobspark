import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Box className="navbar-main-div">
        <Grid display="flex" justifyContent="space-between">
          <img
            src="./images/seclob click away logo RE.png"
            alt="seclob-click-away-logo"
          />
          <div className="navbar-buttons-div">
            <button>Upload Resume</button>
            <button>Employers/Post a job</button>
            <button>
              Kozhikode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clipPath="url(#clip0_1_379)">
                  <path d="M16.5 19.25L11 13.75H22L16.5 19.25Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_379">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button>Log in</button>
          </div>
        </Grid>
      </Box>
    </Container>
  );
};

export default Navbar;
