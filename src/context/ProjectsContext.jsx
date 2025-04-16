import { createContext, useState } from 'react';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projName1, setProjName1] = useState('Poker Simulation');
  const [projName2, setProjName2] = useState('Real-Time Interactive 3D-Graphics Website');
  const [projLink1, setProjLink1] = useState('https://link-to-project.com');
  const [projLink2, setProjLink2] = useState('https://link-to-project.com');
  const [proj1D1, setProj1D1] = useState(
    'Built a full-stack web app to allow users to simulate and visualize outcomes of poker hands against opponents of different play styles using open source cards.js on the front-end'
  );
  const [proj1D2, setProj1D2] = useState(
    'Utilized sci-kit learn in Python to simulate possible outcomes under different scenarios that the user chose'
  );
  const [proj2D1, setProj2D1] = useState(
    'Developed an interactive graphics website using THREE.js to create a 3D workspace with real-time animated 3D models of crystal lattice structures and robotic parts in which animations and camera views can be manipulated.'
  );
  const [proj2D2, setProj2D2] = useState(
    'Utilized Python, Flask, Heroku, JavaScript, AJAX, THREE.js, HTML/CSS, Docker, Git'
  );

  return (
    <ProjectsContext.Provider
      value={{
        projName1,
        setProjName1,
        projName2,
        setProjName2,
        projLink1,
        setProjLink1,
        projLink2,
        setProjLink2,
        proj1D1,
        setProj1D1,
        proj1D2,
        setProj1D2,
        proj2D1,
        setProj2D1,
        proj2D2,
        setProj2D2,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
