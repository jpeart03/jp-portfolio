import "./styles.scss";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-card__img">
                <img src={project.img} alt={project.description} />
            </div>
            <div className="project-card__tags">
                {project.tags.map((t) => (
                    <span className="tag">{t}</span>
                ))}
            </div>
            <div className="project-card__content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
