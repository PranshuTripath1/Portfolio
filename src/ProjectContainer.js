import React from "react";
import Project from "./Project";
import "./Project.css";

const projectData = [
  {
    name: "API-Project",
    description: "Uses API in react to search for users on a website",
    skills: ["HTML", "Javascript", "React"],
    github: "https://github.com/PranshuTripath1/API-project",
    linkedIn: "https://www.linkedin.com/in/pranshu-tripathi-a455871b2/"
  },
  {
    name: "Button Game",
    description: "Button game created using react",
    skills: ["HTML", "Javascript", "React"],
    github: "https://github.com/PranshuTripath1/Button-Game",
    linkedIn: "https://www.linkedin.com/in/pranshu-tripathi-a455871b2/"
  },
  {
    name: "Tic-Tac-Toe",
    description: "Tic-Tac-Toe game created using the react app",
    skills: ["HTML", "Javascript", "React"],
    github: "https://github.com/PranshuTripath1/tictactoe",
    linkedIn: "https://www.linkedin.com/in/pranshu-tripathi-a455871b2/"
  }
];

const ProjectContainer = () => {
  return (
    <>
      <div className="prtitle">
        <h2> PROJECTS </h2>
      </div>
      <div className="projectContainer">
        {projectData.map((projectItem) => {
          return <Project projectItem={projectItem} />;
        })}
      </div>
    </>
  );
};

export default ProjectContainer;
