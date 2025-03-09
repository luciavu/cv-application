import InputLabel from './InputLabel';

function ProjectsInput() {
  return (
    <>
      <div className="project-input">
        <h4>Project 1</h4>
        <InputLabel label="Project Name" type="text"></InputLabel>
        <InputLabel label="Link" type="text"></InputLabel>
        <div className="textarea-label">
          <label htmlFor="proj1d1">Description 1</label>
          <textarea
            id="proj1d1"
            name="text"
            rows="8"
            cols="10"
            wrap="soft"
            maxLength="250"
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
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
      </div>
      <div className="project-input">
        <h4>Project 2</h4>
        <InputLabel label="Project Name" type="text"></InputLabel>
        <InputLabel label="Link" type="text"></InputLabel>
        <div className="textarea-label">
          <label htmlFor="proj2d1">Description 1</label>
          <textarea
            id="proj2d1"
            name="text"
            rows="8"
            cols="10"
            wrap="soft"
            maxLength="250"
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
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
      </div>
    </>
  );
}

export default ProjectsInput;
