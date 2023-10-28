import React from "react";
import Grid from "@mui/material/Grid";

const FooterServiceList = () => {
  return (
    <Grid item lg={3}>
      <div className="footer-service-icons-main">
        <img src="./images/footer-icon-1.svg" alt="footer-icon-1" />
        <div className="footer-service-text">
          <h6>Shop Online</h6>
          <p>
            This online shopping feature brings forth a plethora of gadgets like
            phones, refrigerators, washing machines, cameras, etc. for you to
            choose from and make a smart buy.
          </p>
        </div>
      </div>
    </Grid>
  );
};

export default FooterServiceList;
