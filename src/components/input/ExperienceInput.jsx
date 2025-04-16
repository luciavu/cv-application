import InputLabel from './InputLabel';
import { formatDate } from '../../util';
import { FaXmark } from 'react-icons/fa6';
import { useContext } from 'react';
import ExperienceContext from '../../context/ExperienceContext';

function ExperienceInput() {
  const {
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
    isHidden,
    setIsHidden,
  } = useContext(ExperienceContext);

  const handleClick = () => {
    setIsHidden(true);
  };

  const handleRole1StartDateChange = (e) => setRole1StartDate(formatDate(e.target.value));
  const handleRole2StartDateChange = (e) => setRole2StartDate(formatDate(e.target.value));
  const handleRole1EndDateChange = (e) => setRole1EndDate(formatDate(e.target.value));
  const handleRole2EndDateChange = (e) => setRole2EndDate(formatDate(e.target.value));
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
            id="start-date1"
            label="Start Date"
            type="date"
            labelvalue={role1StartDate}
            handleChange={handleRole1StartDateChange}
          ></InputLabel>
          <InputLabel
            id="end-date1"
            label="End Date"
            type="date"
            labelvalue={role1EndDate}
            handleChange={handleRole1EndDateChange}
          ></InputLabel>
        </div>
        <InputLabel
          id="role1"
          label="Role"
          type="text"
          labelvalue={role1}
          handleChange={handleRole1Change}
        ></InputLabel>
        <InputLabel
          id="company1"
          label="Company"
          type="text"
          labelvalue={company1}
          handleChange={handleCompany1Change}
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

      <div className={`experience-fields ${isHidden ? 'hidden' : ''}`}>
        <div className="deletable-banner">
          <h4>Experience 2</h4>
          <h4>
            <FaXmark onClick={handleClick} />
          </h4>
        </div>
        <div className="dates">
          <InputLabel
            id="start-date2"
            label="Start Date"
            type="date"
            labelvalue={role2StartDate}
            handleChange={handleRole2StartDateChange}
          ></InputLabel>
          <InputLabel
            id="end-date2"
            label="End Date"
            type="date"
            labelvalue={role2EndDate}
            handleChange={handleRole2EndDateChange}
          ></InputLabel>
        </div>
        <InputLabel
          id="role2"
          label="Role"
          type="text"
          labelvalue={role2}
          handleChange={handleRole2Change}
        ></InputLabel>
        <InputLabel
          id="company2"
          label="Company"
          type="text"
          labelvalue={company2}
          handleChange={handleCompany2Change}
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
