import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FooterServiceList from "./FooterServiceList";

const Footer = () => {
  return (
    <>
      {/* Service banners */}
      <div className="service-banner-main">
        <Container>
          <Grid container justifyContent={"space-around"}>
            <Grid item lg={5.5}>
              <div className="service-banner-div">
                <img src="./images/wedding-banner.png" alt="wedding-img" />
                <div className="banner-text-2">
                  <p>Wedding services</p>
                  <h4>
                    All your wedding needs
                    <br /> at your finger tips!
                  </h4>
                  <button>Explore</button>
                </div>
              </div>
            </Grid>

            <Grid item lg={5.5}>
              <div className="service-banner-div">
                <img src="./images/wedding-banner.png" alt="wedding-img" />
                <div className="banner-text-2">
                  <p>Wedding services</p>
                  <h4>
                    All your wedding needs
                    <br /> at your finger tips!
                  </h4>
                  <button>Explore</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Service banners */}

      {/* Why Seclob */}
      <div className="why-seclob-main">
        <Container>
          <h4 className="sub-heading">Why Seclob</h4>
          <Grid container justifyContent={"space-between"}>
            <Grid item lg={"auto"}>
              <div className="why-seclob-icon-text">
                <img src="./images/on-demand.svg" alt="why-seclob-1" />
                <p>On Demand/Scheduled</p>
              </div>
            </Grid>
            <Grid item lg={"auto"}>
              <div className="why-seclob-icon-text">
                <img src="./images/verified-partners.svg" alt="why-seclob-2" />
                <p>Verified Partners</p>
              </div>
            </Grid>
            <Grid item lg={"auto"}>
              <div className="why-seclob-icon-text">
                <img src="./images/service-warranty.svg" alt="why-seclob-3" />
                <p>Service Warranty</p>
              </div>
            </Grid>
            <Grid item lg={"auto"}>
              <div className="why-seclob-icon-text">
                <img
                  src="./images/transparent-pricing.svg"
                  alt="why-seclob-4"
                />
                <p>Transparent Pricing</p>
              </div>
            </Grid>
            <Grid item lg={"auto"}>
              <div className="why-seclob-icon-text">
                <img src="./images/online-payments.svg" alt="why-seclob-5" />
                <p>Online Payments</p>
              </div>
            </Grid>
            <Grid item lg={"auto"}>
              <div className="why-seclob-icon-text">
                <img src="./images/support.svg" alt="why-seclob-6" />
                <p>24 x 7 Support</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Why Seclob */}

      {/* Footer links */}
      <Container>
        <div className="footer-links">
          <ul>
            <li>About Us</li>
            <li>|</li>
            <li>Terms & Conditions</li>
            <li>|</li>
            <li>Privacy Policy</li>
            <li>|</li>
            <li>Cancellation Policy</li>
            <li>|</li>
            <li>FAQ</li>
            <li>|</li>
            <li>Blog</li>
            <li>|</li>
            <li>Contact</li>
          </ul>
        </div>
      </Container>
      {/* Footer links */}

      {/* Footer services */}
      <Container>
        <h6 className="footer-services">
          Some of our services that will prove useful to you on a day-to-day
          basis are:
        </h6>
        <div>
          <Grid container spacing={2}>
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
            <FooterServiceList />
          </Grid>
        </div>
      </Container>
      {/* Footer services */}

      {/* Footer text */}
      <Container>
        <div className="footer-ending-texts">
          <p>
            Some of the other services that can be of assistance to you for
            leisure, health and home convenience are - Courier Service, Laundry
            Service, AC Repair, Thyrocare, Metropolis, Order Mineral Water, Book
            a Table, Doctor's Appointment, Order Food Online, etc.
            <br />
            <br /> With an endless number of things under the sun, you can be
            sure this will be your 'One Stop Shop' to find everything and more.
          </p>
        </div>
        <div className="footer-end-icons">
          <img
            className="logo-bw"
            src="./images/seclob click away logo BW.png"
            alt="seclob-logo"
          />
          <p>
            Seclob brings the best of Home Maintenance and Repairs, Utility,
            Lifestyle, Health,
            <br /> Beauty Services, and Local Shopping to the customer, right
            where they are, all
            <br /> through an easy to use platform.
          </p>
          <div className="social-icons">
            <span>Follow Us On</span>
            <img src="./images/instagram 1.png" alt="instagram" />
            <img src="./images/facebook 1.png" alt="facebook" />
            <img src="./images/linkedin 1.png" alt="linkedin" />
            <img src="./images/twitter (1) 1.png" alt="x" />
            <img src="./images/youtube 1.png" alt="youtube" />
          </div>
        </div>
      </Container>
      <div className="footer-end">
        <p>
          Copyright 2022 Seclob Technologies Pvt.Ltd. All Rights Reserved |
          Designed & Developed by Seclob Technologies
        </p>
      </div>
      {/* Footer text */}
    </>
  );
};

export default Footer;
