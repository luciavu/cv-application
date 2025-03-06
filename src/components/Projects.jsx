function Projects() {
  return (
    <>
      <div className="projects">
        <h2>PROJECTS</h2>
        <hr />
        <div className="project-container">
          <div className="project">
            <div className="title-link">
              <div className="title">Poker Simulation</div>
              <a className="link">(https://link-to-project.com)</a>
            </div>
            <ul className="description">
              <li>
                Built a full-stack web app to allow users to simulate and visualize outcomes of
                poker hands against opponents of different play styles using open source cards.js on
                the front-end
              </li>
              <li>
                Utilized sci-kit learn in Python to simulate possible outcomes under different
                scenarios that the user chose
              </li>
            </ul>
          </div>
          <div className="project">
            <div className="title-link">
              <div className="title">Real-Time Interactive 3D-Graphics Website</div>
              <a className="link">(https://link-to-project.com)</a>
            </div>
            <ul className="description">
              <li>
                Developed an interactive graphics website using THREE.js to create a 3D workspace
                with real-time animated 3D models of crystal lattice structures and robotic parts in
                which animations and camera views can be manipulated.
              </li>
              <li>
                Utilized Python, Flask, Heroku, JavaScript, AJAX, THREE.js, HTML/CSS, Docker, Git
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
