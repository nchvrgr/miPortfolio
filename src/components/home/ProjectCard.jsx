import React from 'react';




function ProjectCard({project}) {
    const color = project.color;
    console.log(project);
    return (
            <div className="card">
                <img className="imagen" src={project.image.default} alt={project.name}/>
                <div className="card-content">
                    <h5 className="styles.title"> {project.name}</h5>
                    <p className="styles.texto"> {project.description}</p>
                </div>
                <div className="card-technologies">
                    <p className="styles.texto">
                        {
                        project.technologies?.map(technology => (
                            <span className="technology" style={{"backgroundColor": `${color}`}}>{technology}</span>
                        ))
                        }
                    </p>
                </div>
                <div className="projectLinks">
                    {project.url ?
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <i className="material-icons iconoAbrir">open_in_new</i> Website
                        </a>
                    : null
                    }
                    {project.repo ?
                        <a href={project.repo} target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-github"></i> Repository
                        </a>
                    : null
                    }
                    {project.video ?
                        <a href={project.video} target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-youtube"></i> Video
                        </a>
                    : null
                    }
                </div>
            </div>
    );
}

export default ProjectCard
