import { Box } from "@mui/material";
import React from "react";

const AppliedCandidateCard = () => {
  return (
    <Box className="applied-candidate-card" display={'flex'} flexDirection={'column'} gap={1}>
      <h4>Sharankrishna</h4>
      <p>9745640896</p>
      <p>sharankrishnavp@gmail.com</p>
      <Box className="download-btn">
        <p>Download Resume</p>
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
  );
};

export default AppliedCandidateCard;
