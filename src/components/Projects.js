import "./Projects.css";
import data from "../projects.json";

const Projects = () => {
    return (
        <div className="projects">
            <p className="title">Projects</p>
            <div className="container">
                {data["projects"].map((proj, i) => {
                    return (
                        <ProjectCard
                            key={i}
                            proj={proj}
                            className="proj-card"></ProjectCard>
                    );
                })}
            </div>
        </div>
    );
};

const ProjectCard = (props) => {
    const proj = props.proj;

    return (
        <div className="project-card">
            <p>{proj["name"]}</p>
            <p>
                Description |<br />
                {proj["description"]}
            </p>
            <p>
                Skills |<br />
                {proj["skills"].map((skill, i) => {
                    return <p key={i}>{skill}</p>;
                })}
            </p>
            <p>Git Hub | Live </p>
        </div>
    );
};

export default Projects;
