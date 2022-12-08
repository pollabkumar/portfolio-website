import React from "react";
import ProjectItem from "../component/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Project() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Project;

1.6;
