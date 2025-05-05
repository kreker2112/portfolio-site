import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/ButtonGitHub";

import { projects } from "../helpers/projectsList";

const Project = () => {
  const { key } = useParams();
  const project = projects.find((item) => item.key === Number(key));
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <a
            href={project.deployLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
          </a>
          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
        </div>
      </div>
    </main>
  );
};

export default Project;
