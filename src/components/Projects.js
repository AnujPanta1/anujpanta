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

// const ProjectCard = (props) => {
//     const proj = props.proj;
//     let skills = ": ";
//     for (let skill of proj["skills"]) {
//         skills += skill + ", ";
//     }
//     skills = skills.slice(0, skills.length - 2);
//     return (
//         <div className="project-card">
//             <p>{proj["name"]}</p>
//             <p>Description: {proj["description"]}</p>
//             Skills{skills}
//             <p>Git Hub</p>
//         </div>
//     );
// };

const ProjectCard = (props) => {
    return <div className="project-card">hi</div>;
};

export default Projects;
