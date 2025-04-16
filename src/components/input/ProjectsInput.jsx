import InputLabel from './InputLabel';
import { useContext } from 'react';
import ProjectsContext from '../../context/ProjectsContext';
function ProjectsInput() {
  const {
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
  } = useContext(ProjectsContext);
  const handleProjName1Change = (e) => setProjName1(e.target.value);
  const handleProjName2Change = (e) => setProjName2(e.target.value);
  const handleProjLink1Change = (e) => setProjLink1(e.target.value);
  const handleProjLink2Change = (e) => setProjLink2(e.target.value);
  const handleProj1D1Change = (e) => setProj1D1(e.target.value);
  const handleProj1D2Change = (e) => setProj1D2(e.target.value);
  const handleProj2D1Change = (e) => setProj2D1(e.target.value);
  const handleProj2D2Change = (e) => setProj2D2(e.target.value);
  return (
    <>
      <div className="project-input">
        <h4>Project 1</h4>
        <InputLabel
          id="project1"
          label="Project Name"
          type="text"
          labelvalue={projName1}
          handleChange={handleProjName1Change}
        ></InputLabel>
        <InputLabel
          id="link1"
          label="Link"
          type="text"
          labelvalue={projLink1}
          handleChange={handleProjLink1Change}
        ></InputLabel>
        <div className="textarea-label">
          <label htmlFor="proj1d1">Description 1</label>
          <textarea
            id="proj1d1"
            name="text"
            rows="8"
            cols="10"
            wrap="soft"
            maxLength="250"
            value={proj1D1}
            onChange={handleProj1D1Change}
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
        <div className="textarea-label">
          <label htmlFor="proj1d2">Description 2</label>
          <textarea
            id="proj1d2"
            name="text"
            rows="8"
            cols="10"
            wrap="soft"
            maxLength="250"
            value={proj1D2}
            onChange={handleProj1D2Change}
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
      </div>
      <div className="project-input">
        <h4>Project 2</h4>
        <InputLabel
          id="project2"
          label="Project Name"
          type="text"
          labelvalue={projName2}
          handleChange={handleProjName2Change}
        ></InputLabel>
        <InputLabel
          id="link2"
          label="Link"
          type="text"
          labelvalue={projLink2}
          handleChange={handleProjLink2Change}
        ></InputLabel>
        <div className="textarea-label">
          <label htmlFor="proj2d1">Description 1</label>
          <textarea
            id="proj2d1"
            name="text"
            rows="8"
            cols="10"
            wrap="soft"
            maxLength="250"
            value={proj2D1}
            onChange={handleProj2D1Change}
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
        <div className="textarea-label">
          <label htmlFor="proj2d2">Description 2</label>
          <textarea
            id="proj2d2"
            name="text"
            rows="8"
            cols="10"
            wrap="soft"
            maxLength="250"
            value={proj2D2}
            onChange={handleProj2D2Change}
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
      </div>
    </>
  );
}

export default ProjectsInput;
