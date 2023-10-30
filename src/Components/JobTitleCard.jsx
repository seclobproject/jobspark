import React from "react";
import Box from "@mui/material/Box";
import SalaryTypeComps from "./SalaryTypeComps";

const JobTitleCard = () => {
  return (
    <Box className="job-title-card" textAlign={"center"} marginY={5}>
      <Box className="title">
        Computer Operator Part Time / Data Entry Operator Fresher
      </Box>
      <Box display={'flex'} justifyContent={'center'} marginTop={1.5} marginBottom={1}>
        <SalaryTypeComps />
      </Box>
      <p>Posted 10 days ago</p>
    </Box>
  );
};

export default JobTitleCard;
