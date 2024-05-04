function ProjectCard(props) {
    return (
        <div>
            <h1>Portfolio</h1>
            {props.projects.map(project => {
                return(
                <div className="card" key={project.id}>
                <img src={project.img} className="card-img-top" alt={project.alt}></img>
                <div className="card-body">
                    <h5 key={project.id}>{project.name}</h5>
                    <a href={project.repoUrl} className="btn btn-primary">Vist the Repo!</a>
                    <a href={project.deployedUrl} className="btn btn-primary">Visit this page!</a>
                </div>
                </div>
            )})}
            <p>Something </p>
        </div>
    )
}
export default ProjectCard;

        // {props.projects.map(project => (
        //     <div class="card" style="width: 18rem;" key={project.id}>
        //         <img src={project.img} class="card-img-top" alt={project.alt}></img>
        //         <div class ="card-body">
        //             <h5>{project.name}</h5>
        //             <a href={project.repoUrl} class="btn btn-primary">Vist the Repo!</a>
        //             <a href={project.deployedUrl} class="btn btn-primary">Visit this page!</a>
        //         </div>
        //     </div>
        // )}