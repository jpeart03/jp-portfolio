import "./styles.scss";

const ProjectCard = (props) => {
    const tags = ["C#", "SQL Server", "ASP.NET Blazor", "JS", "CSS"];

    return (
        <div className="project-card">
            <div className="project-card__img"></div>
            <div className="project-card__tags">
                {tags.map((t) => (
                    <span className="tag">{t}</span>
                ))}
            </div>
            <div className="project-card__content">
                <h2>Title</h2>
                <p>
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec lorem neque, molestie sed suscipit
                    in, interdum at velit. Curabitur convallis nisl eget eros
                    sodales, in ullamcorper eros pulvinar.
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
