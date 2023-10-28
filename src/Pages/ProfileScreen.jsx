import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Footer from '../Components/Footer';

const ProfileScreen = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [isChecked, setIsChecked] = useState(false);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setSelectedFile(file);
  //     // You can add additional logic here, such as file validation, if needed.
  //   }
  // };

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

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

      <Box marginY={7} className="profile-screen-box">
        <Container>
          <Grid container>
            <Grid item lg={"6"} marginBottom={2}>
              <Box className="left-input">
                <label>First name</label>
                <br />
                <input type="text" />
              </Box>
            </Grid>
            <Grid item lg={"6"} marginBottom={2}>
              <Box className="right-input">
                <label>Last name</label>
                <br />
                <input type="text" />
              </Box>
            </Grid>
            <Grid item lg={"6"} marginBottom={2}>
              <Box className="left-input">
                <label>Street Address</label>
                <br />
                <input type="text" />
              </Box>
            </Grid>
            <Grid item lg={"6"} marginBottom={2}>
              <Box className="right-input">
                <label>Phone Number</label>
                <br />
                <input type="text" />
              </Box>
            </Grid>
            <Grid item lg={"6"} marginBottom={2}>
              <Box className="left-input">
                <label>State</label>
                <br />
                <input type="text" />
              </Box>
            </Grid>
            <Grid item lg={"6"} marginBottom={2}>
              <Box className="right-input">
                <label>Email</label>
                <br />
                <input type="text" />
              </Box>
            </Grid>
            <Grid item lg={"6"} marginBottom={2}>
              <Grid container marginBottom={2}>
                <Grid item lg={"6"}>
                  <Box className="inner-left-input">
                    <label>City</label>
                    <br />
                    <input type="text" />
                  </Box>
                </Grid>
                <Grid item lg={"6"}>
                  <Box className="inner-right-input">
                    <label>Pin Code</label>
                    <br />
                    <input type="text" />
                  </Box>
                </Grid>
              </Grid>

              <Box className="left-input" marginBottom={2}>
                <label>Education</label>
                <br />
                <input type="text" />
              </Box>

              <Box className="left-input" marginBottom={2}>
                <label>Work status</label>
                <br />
                <select
                  name="works"
                  id="works"
                  className="work-status-selector"
                >
                  <option value="fresher">I'm fresher</option>
                  <option value="experienced">I'm experienced</option>
                </select>
              </Box>

              {/* <Box className="left-input" marginBottom={2}>
                <label>Upload Resume (doc/pdf)</label>
                <div className="custom-file-input">
                  <label
                    htmlFor="fileInput"
                    className="custom-file-label"
                  ></label>
                  <input
                    type="file"
                    id="fileInput"
                    accept=".jpg, .jpeg, .png, .pdf"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                </div>
              </Box> */}
            </Grid>
            <Grid item lg={"6"} marginBottom={2}>
              <Box className="right-input" marginTop={2}>
                <h3>Enter a past job that shows relevant experience</h3>
                <p>Relevant experience</p>
              </Box>

              <Box className="right-input" marginBottom={2}>
                <label>Company</label>
                <br />
                <input type="text" />
              </Box>

              <Box className="right-input" marginBottom={2}>
                <label>Experience</label>
                <br />
                <input type="text" />
              </Box>

              <Box className="right-input" marginBottom={2}>
                <label>Job Title</label>
                <br />
                <input type="text" />
              </Box>
            </Grid>

            <Grid item lg={"6"} marginBottom={2}>
              <Box className="left-input" marginTop={2} marginBottom={2}>
                <p>Are you willing to relocate?</p>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="custom-checkbox-visual"></span>
                  <span>Yes, I am willing to relocate.</span>
                </label>
              </Box>

              <Box className="left-input" marginBottom={2}>
                <label>Add upto three locations</label>
                <br />
                <input type="text" />
              </Box>

              <Box display={'flex'} marginBottom={2}>
                <div className="form-location-div">Kozhikkode</div>
                <div className="form-location-div">Kozhikkode</div>
                <div className="form-location-div">Kozhikkode</div>
              </Box>

              <Box className="left-input" marginBottom={2}>
                <label>How many years of total work experience do you have?</label>
                <br />
                <input type="text" />
              </Box>

              <Box className="left-input" marginBottom={2}>
                <label>How many years of total work experience do you have?</label>
                <br />
                <input type="text" />
              </Box>

              <Box display={'flex'} marginBottom={2}>
                <div className="form-location-div">Designer</div>
                <div className="form-location-div">Designer</div>
                <div className="form-location-div">Designer</div>
              </Box>

              <button className="Profile-apply-btn">Apply</button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProfileScreen;
