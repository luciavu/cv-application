import InputLabel from './InputLabel';

function ExperienceInput() {
  return (
    <>
      <div className="experience-fields">
        <h4>Experience 1</h4>
        <div className="dates">
          <InputLabel label="Start Date" type="date"></InputLabel>
          <InputLabel label="End Date" type="date"></InputLabel>
        </div>
        <InputLabel label="Role" type="text"></InputLabel>
        <InputLabel label="Company" type="text"></InputLabel>
        <div className="textarea-label">
          <label htmlFor="exp1d1">Description 1</label>
          <textarea
            id="exp1d1"
            name="text"
            rows="7"
            cols="10"
            wrap="soft"
            maxLength="250"
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
        <div className="textarea-label">
          <label htmlFor="exp1d2">Description 2</label>
          <textarea
            id="exp1d2"
            name="text"
            rows="7"
            cols="10"
            wrap="soft"
            maxLength="250"
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
      </div>
      <div className="experience-fields">
        <h4>Experience 2</h4>
        <div className="dates">
          <InputLabel label="Start Date" type="date"></InputLabel>
          <InputLabel label="End Date" type="date"></InputLabel>
        </div>
        <InputLabel label="Role" type="text"></InputLabel>
        <InputLabel label="Company" type="text"></InputLabel>
        <div className="textarea-label">
          <label htmlFor="exp2d1">Description 1</label>
          <textarea
            id="exp2d1"
            name="text"
            rows="7"
            cols="10"
            wrap="soft"
            maxLength="250"
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
        <div className="textarea-label">
          <label htmlFor="exp2d2">Description 2</label>
          <textarea
            id="exp2d2"
            name="text"
            rows="7"
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

export default ExperienceInput;
