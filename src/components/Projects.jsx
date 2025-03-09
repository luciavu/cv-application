function Projects({
  projName1,
  projName2,
  projLink1,
  projLink2,
  proj1D1,
  proj1D2,
  proj2D1,
  proj2D2,
}) {
  return (
    <>
      <div className="projects">
        <h2>PROJECTS</h2>
        <hr />
        <div className="project-container">
          <div className="project">
            <div className="title-link">
              <div className="title">{projName1}</div>
              <a className="link">{projLink1 ? `(${projLink1})` : ''}</a>
            </div>
            <ul className="description">
              {proj1D1 ? <li>{proj1D1}</li> : ''}
              {proj1D2 ? <li>{proj1D2}</li> : ''}
            </ul>
          </div>
          <div className="project">
            <div className="title-link">
              <div className="title">{projName2}</div>
              <a className="link">{projLink2 ? `(${projLink2})` : ''}</a>
            </div>
            <ul className="description">
              {proj2D1 ? <li>{proj2D1}</li> : ''}
              {proj2D2 ? <li>{proj2D2}</li> : ''}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
