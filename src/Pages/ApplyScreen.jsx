import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const ApplyScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // You can add additional logic here, such as file validation, if needed.
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Box className="apply-screen">
        <Box className="apply-screen-box">
          <Box>
            <h4>Add a resume for SENIOR CARE PLUS</h4>
            <Box marginBottom={2}>
              <div className="custom-file-input custom-file-input-applyscreen">
                <label htmlFor="fileInput" className="custom-file-label">
                  Upload Resume (doc/pdf)
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept=".jpg, .jpeg, .png, .pdf"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {selectedFile && <p>Selected file: {selectedFile.name}</p>}
              </div>
            </Box>
          </Box>

            <button className="Profile-apply-btn applyscren-btn">Continue</button>
        </Box>
      </Box>
    </Container>
  );
};

export default ApplyScreen;
