import React from "react";
import SalaryTypeComps from "./SalaryTypeComps";

const HomeScreenJobCard = () => {
  return (
    <div className="home-jobcard-main">
      <h4>Computer Operator Part Time / Data Entry Operator Fresher</h4>
      <h6>Seclob Technologies, Cyberpark, Calicut</h6>
      <div className="home-jobcard-sub">
        <SalaryTypeComps />
        <div className="jobcard-sub-content hiring-status">
          <svg
            className="icon-hiring"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <g clipPath="url(#clip0_1_634)">
              <path
                d="M13.4163 13.6581V21.0833H3.83301C3.83271 19.913 4.10031 18.7582 4.61529 17.7074C5.13028 16.6566 5.87899 15.7376 6.80405 15.0209C7.72911 14.3041 8.80597 13.8087 9.95211 13.5725C11.0983 13.3362 12.2833 13.3655 13.4163 13.6581ZM11.4997 12.4583C8.3228 12.4583 5.74967 9.88513 5.74967 6.70825C5.74967 3.53138 8.3228 0.958252 11.4997 0.958252C14.6765 0.958252 17.2497 3.53138 17.2497 6.70825C17.2497 9.88513 14.6765 12.4583 11.4997 12.4583ZM17.2497 16.2916V13.4166H19.1663V16.2916H22.0413V18.2083H19.1663V21.0833H17.2497V18.2083H14.3747V16.2916H17.2497Z"
                fill="#077AC2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_634">
                <rect width="23" height="23" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Hiring Multiple candidates</span>
        </div>

        <div className="jobcard-sub-content hiring-status">
          <svg
            className="icon-hiring"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM11 10V5H9V12H15V10H11Z"
              fill="#077AC2"
            />
          </svg>
          <span>Urgently Hiring</span>
        </div>

        <div className="posted-date">
          <span>Posted in 10 days to ago</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#848484" />
          </svg>
          <span>based on jobs you explored</span>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenJobCard;
