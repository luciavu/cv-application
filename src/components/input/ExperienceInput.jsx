import InputLabel from './InputLabel';

function ExperienceInput({
  role1StartDate,
  setRole1StartDate,
  role2StartDate,
  setRole2StartDate,
  role1EndDate,
  setRole1EndDate,
  role2EndDate,
  setRole2EndDate,
  role1,
  setRole1,
  role2,
  setRole2,
  company1,
  setCompany1,
  company2,
  setCompany2,
  role1D1,
  setRole1D1,
  role1D2,
  setRole1D2,
  role2D1,
  setRole2D1,
  role2D2,
  setRole2D2,
}) {
  const handleRole1StartDateChange = (e) => setRole1StartDate(e.target.value);
  const handleRole2StartDateChange = (e) => setRole2StartDate(e.target.value);
  const handleRole1EndDateChange = (e) => setRole1EndDate(e.target.value);
  const handleRole2EndDateChange = (e) => setRole2EndDate(e.target.value);
  const handleRole1Change = (e) => setRole1(e.target.value);
  const handleRole2Change = (e) => setRole2(e.target.value);
  const handleCompany1Change = (e) => setCompany1(e.target.value);
  const handleCompany2Change = (e) => setCompany2(e.target.value);
  const handleRole1D1Change = (e) => setRole1D1(e.target.value);
  const handleRole1D2Change = (e) => setRole2D1(e.target.value);
  const handleRole2D1Change = (e) => setRole1D2(e.target.value);
  const handleRole2D2Change = (e) => setRole2D2(e.target.value);

  return (
    <>
      <div className="experience-fields">
        <h4>Experience 1</h4>
        <div className="dates">
          <InputLabel
            label="Start Date"
            type="date"
            labelvalue={role1StartDate}
            onChange={handleRole1StartDateChange}
          ></InputLabel>
          <InputLabel
            label="End Date"
            type="date"
            labelvalue={role1EndDate}
            onChange={handleRole1EndDateChange}
          ></InputLabel>
        </div>
        <InputLabel
          label="Role"
          type="text"
          labelvalue={role1}
          onChange={handleRole1Change}
        ></InputLabel>
        <InputLabel
          label="Company"
          type="text"
          labelvalue={company1}
          onChange={handleCompany1Change}
        ></InputLabel>
        <div className="textarea-label">
          <label htmlFor="exp1d1">Description 1</label>
          <textarea
            id="exp1d1"
            name="text"
            rows="7"
            cols="10"
            wrap="soft"
            maxLength="250"
            value={role1D1}
            onChange={handleRole1D1Change}
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
            value={role1D2}
            onChange={handleRole1D2Change}
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
      </div>
      <div className="experience-fields">
        <h4>Experience 2</h4>
        <div className="dates">
          <InputLabel
            label="Start Date"
            type="date"
            labelvalue={role2StartDate}
            onChange={handleRole2StartDateChange}
          ></InputLabel>
          <InputLabel
            label="End Date"
            type="date"
            labelvalue={role2EndDate}
            onChange={handleRole2EndDateChange}
          ></InputLabel>
        </div>
        <InputLabel
          label="Role"
          type="text"
          labelvalue={role2}
          onChange={handleRole2Change}
        ></InputLabel>
        <InputLabel
          label="Company"
          type="text"
          labelvalue={company2}
          onChange={handleCompany2Change}
        ></InputLabel>
        <div className="textarea-label">
          <label htmlFor="exp2d1">Description 1</label>
          <textarea
            id="exp2d1"
            name="text"
            rows="7"
            cols="10"
            wrap="soft"
            maxLength="250"
            value={role2D1}
            onChange={handleRole2D1Change}
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
            value={role2D2}
            onChange={handleRole2D2Change}
          ></textarea>
          <div className="maxlen">Max length: 250 characters</div>
        </div>
      </div>
    </>
  );
}

export default ExperienceInput;
