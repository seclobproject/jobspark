import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import JobTitleCard from "../../Components/JobTitleCard";
import Grid from "@mui/material/Grid";
import Footer from "../../Components/Footer";

const ApplicantProfileScreen = () => {
  return (
    <Box>
      <Container>
        <JobTitleCard />

        <Box className="applicant-details" marginBottom={5}>
          <Box marginBottom={2}>
            <select
              name="app-status"
              id="app-status"
              className="application-status"
            >
              <option value="accepted" selected>
                Accept/Reject
              </option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item lg={6}>
                <Box className="applicant-contact-info" marginBottom={2}>
                  <h4>Contact Information</h4>
                  <Box marginBottom={2}>
                    <p>
                      <strong>Sharankrishna VP</strong>
                    </p>
                    <p>9745645353</p>
                    <p>sample@gmail.com</p>
                  </Box>
                  <Box>
                    <p>
                      <strong>State, District</strong>
                    </p>
                    <p>9745645353</p>
                    <p>sample@gmail.com</p>
                  </Box>
                </Box>
                <Box className="applicant-contact-info" marginBottom={2}>
                  <h4>Relevant experience</h4>
                  <Box marginBottom={2}>
                    <div className="applicant-job">Job title</div>
                    <div className="applicant-job">Company name</div>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box className="applicant-contact-info ci-right" marginBottom={2}>
                  <h4>Questions from Seclob</h4>
                  <Box marginBottom={5}>
                    <p>
                      <strong>
                        Will you be able to reliably commute or relocate to
                        Hilite Business Park, Calicut, Kerala for this job?
                      </strong>
                    </p>
                    <p>Yes, I am planning to relocate</p>
                  </Box>
                  <Box marginBottom={5}>
                    <p>
                      <strong>
                        How many years of total work experience do you have?
                      </strong>
                    </p>
                    <p>2</p>
                  </Box>
                  <Box marginBottom={5}>
                    <p>
                      <strong>Supporting documents</strong>
                    </p>
                    <p>
                      No cover letter or additional documents included
                      (optional)
                    </p>
                  </Box>
                  <Box marginBottom={5}>
                    <p>
                      <strong>Resume</strong>
                    </p>
                    <Box display={"flex"} gap={1}>
                      <Box
                        border={"1px solid #D9D9D9"}
                        display={"inline-block"}
                        paddingY={0.5}
                        paddingX={1.5}
                        borderRadius={1}
                      >
                        <img
                          className="pdf-icon"
                          src="./images/pdf-icon.png"
                          alt="pdf-icon"
                        />
                      </Box>
                      <Box className="download-btn">
                        <span>Download Resume</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_2166)">
                            <path
                              d="M8.125 6.25H11.25L7.5 10L3.75 6.25H6.875V1.875H8.125V6.25ZM2.5 11.875H12.5V7.5H13.75V12.5C13.75 12.6658 13.6842 12.8247 13.5669 12.9419C13.4497 13.0592 13.2908 13.125 13.125 13.125H1.875C1.70924 13.125 1.55027 13.0592 1.43306 12.9419C1.31585 12.8247 1.25 12.6658 1.25 12.5V7.5H2.5V11.875Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_2166">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ApplicantProfileScreen;
