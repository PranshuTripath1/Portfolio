import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Homepage = () => {
  return (
    <>
      <div className="mainHomePage">
        <h1>
          Hi, I am <span className="name">Pranshu Tripathi.</span>
        </h1>
        <h2>A Student at GEC, Bharuch.</h2>
        <p className="desc">
          I'm currently pursuing a Bachelors of Engineering in the Electronics
          and Communication field. I'm very much interested in the coding field
          and am working hard to become a full fledged developer.
        </p>
        <div className="link">
          <a href="https://drive.google.com/file/d/1h26nGtm8Xy4yiNQxkKDeRArV-vF53oS8/view">
            <Button className="resume" variant="outlined" size="medium">
              Resume
            </Button>
          </a>
          <a href="https://github.com/PranshuTripath1">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/pranshu-tripathi-a455871b2/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  );
};
