/* eslint-disable react/prop-types */

function ProjectCard(props) {
    return (
        <div>
            <h1>Portfolio</h1>
            {props.projects.map(project => {
                return(
                <div className="card mb-3" key={project.id}>
                <img src={project.img} className="card-img-top" alt={project.alt}></img>
                <div className="card-body">
                    <h5 key={project.id}>{project.name}</h5>
                    <a href={project.repoUrl} className="card-link">Vist the Repo!</a>
                    <a href={project.deployedUrl} className="card-link">Visit this page!</a>
                </div>
                </div>
            )})}
        </div>
    )
}
export default ProjectCard;
