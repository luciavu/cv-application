import InputLabel from './InputLabel';
import { formatDate } from '../../util';
import { FaXmark } from 'react-icons/fa6';
import { useContext } from 'react';
import EducationContext from '../../context/EducationContext';
function EducationInput() {
  const {
    schoolTitle1,
    setSchoolTitle1,
    schoolTitle2,
    setSchoolTitle2,
    schoolName1,
    setSchoolName1,
    schoolName2,
    setSchoolName2,
    gpa1,
    setGpa1,
    gpa2,
    setGpa2,
    schoolStartDate1,
    setSchoolStartDate1,
    schoolStartDate2,
    setSchoolStartDate2,
    schoolEndDate1,
    setSchoolEndDate1,
    schoolEndDate2,
    setSchoolEndDate2,
    isHidden,
    setIsHidden,
  } = useContext(EducationContext);

  const handleClick = () => {
    setIsHidden(true);
  };
  const handleSchoolTitle1Change = (e) => setSchoolTitle1(e.target.value);
  const handleSchoolTitle2Change = (e) => setSchoolTitle2(e.target.value);
  const handleSchoolName1Change = (e) => setSchoolName1(e.target.value);
  const handleSchoolName2Change = (e) => setSchoolName2(e.target.value);
  const handleGpa1Change = (e) => setGpa1(e.target.value);
  const handleGpa2Change = (e) => setGpa2(e.target.value);
  const handleSchoolStartDate1Change = (e) => setSchoolStartDate1(formatDate(e.target.value));
  const handleSchoolStartDate2Change = (e) => setSchoolStartDate2(formatDate(e.target.value));
  const handleSchoolEndDate1Change = (e) => setSchoolEndDate1(formatDate(e.target.value));
  const handleSchoolEndDate2Change = (e) => setSchoolEndDate2(formatDate(e.target.value));

  return (
    <>
      <div className="education-input">
        <h4>Education 1</h4>
        <InputLabel
          id="school-title1"
          label="Title"
          type="text"
          labelvalue={schoolTitle1}
          handleChange={handleSchoolTitle1Change}
        ></InputLabel>
        <InputLabel
          id="school1"
          label="School"
          type="text"
          labelvalue={schoolName1}
          handleChange={handleSchoolName1Change}
        ></InputLabel>
        <InputLabel
          id="gpa1"
          label="GPA"
          type="number"
          labelvalue={gpa1}
          handleChange={handleGpa1Change}
        ></InputLabel>

        <div className="dates">
          <InputLabel
            id="start-date1"
            label="Start Date"
            type="date"
            labelvalue={schoolStartDate1}
            handleChange={handleSchoolStartDate1Change}
          ></InputLabel>
          <InputLabel
            id="end-date1"
            label="End Date"
            type="date"
            labelvalue={schoolEndDate1}
            handleChange={handleSchoolEndDate1Change}
          ></InputLabel>
        </div>
      </div>
      <div className={`education-input ${isHidden ? 'hidden' : ''}`} id="ed2">
        <div className="deletable-banner">
          <h4>Education 2</h4>
          <h4>
            <FaXmark onClick={handleClick} />
          </h4>
        </div>
        <InputLabel
          id="school-title2"
          label="Title"
          type="text"
          labelvalue={schoolTitle2}
          handleChange={handleSchoolTitle2Change}
        ></InputLabel>
        <InputLabel
          id="school2"
          label="School"
          type="text"
          labelvalue={schoolName2}
          handleChange={handleSchoolName2Change}
        ></InputLabel>
        <InputLabel
          id="gpa2"
          label="GPA"
          type="number"
          labelvalue={gpa2}
          handleChange={handleGpa2Change}
        ></InputLabel>

        <div className="dates">
          <InputLabel
            id="start-date2"
            label="Start Date"
            type="date"
            labelvalue={schoolStartDate2}
            handleChange={handleSchoolStartDate2Change}
          ></InputLabel>
          <InputLabel
            id="end-date2"
            label="End Date"
            type="date"
            labelvalue={schoolEndDate2}
            handleChange={handleSchoolEndDate2Change}
          ></InputLabel>
        </div>
      </div>
    </>
  );
}

export default EducationInput;
