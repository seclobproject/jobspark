import React from "react";
import SalaryTypeComps from "./SalaryTypeComps";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ApplicationHistoryComp = () => {
  return (
    <div className="app-history-comp-main">
      <Grid container>
        <Grid item lg={10}>
          <h4 className="card-heading">
            Computer Operator Part Time / Data Entry Operator Fresher
          </h4>
          <p className="card-company-name">
            Seclob Technologies, Cyberpark, Calicut
          </p>
          <SalaryTypeComps />
          <Box display={"flex"} alignItems={"center"}>
            <span className="applied-ago">Applied 10 days ago</span>
            <img
              className="delete-icon"
              src="/images/delete-icon.png"
              alt="delete-icon"
            />
          </Box>
        </Grid>
        <Grid item lg={2} display={'flex'} direction={'column'} justifyContent={'center'}>
          <div className="application-btn-div">
            <button className="application-status-btn">Accepted</button>
          </div>
          <div className="application-btn-div">
            <button className="application-edit-btn">Edit your personal data</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicationHistoryComp;
