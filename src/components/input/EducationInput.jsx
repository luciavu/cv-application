import InputLabel from './InputLabel';

function EducationInput({
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
}) {
  const handleSchoolTitle1Change = (e) => setSchoolTitle1(e.target.value);
  const handleSchoolTitle2Change = (e) => setSchoolTitle2(e.target.value);
  const handleSchoolName1Change = (e) => setSchoolName1(e.target.value);
  const handleSchoolName2Change = (e) => setSchoolName2(e.target.value);
  const handleGpa1Change = (e) => setGpa1(e.target.value);
  const handleGpa2Change = (e) => setGpa2(e.target.value);
  const handleSchoolStartDate1Change = (e) => setSchoolStartDate1(e.target.value);
  const handleSchoolStartDate2Change = (e) => setSchoolStartDate2(e.target.value);
  const handleSchoolEndDate1Change = (e) => setSchoolEndDate1(e.target.value);
  const handleSchoolEndDate2Change = (e) => setSchoolEndDate2(e.target.value);

  return (
    <>
      <div className="education-input">
        <h4>Education 1</h4>
        <InputLabel
          label="Title"
          type="text"
          labelvalue={schoolTitle1}
          handleChange={handleSchoolTitle1Change}
        ></InputLabel>
        <InputLabel
          label="School"
          type="text"
          labelvalue={schoolName1}
          handleChange={handleSchoolName1Change}
        ></InputLabel>
        <InputLabel
          label="GPA"
          type="number"
          labelvalue={gpa1}
          handleChange={handleGpa1Change}
        ></InputLabel>

        <div className="dates">
          <InputLabel
            label="Start Date"
            type="date"
            labelvalue={schoolStartDate1}
            handleChange={handleSchoolStartDate1Change}
          ></InputLabel>
          <InputLabel
            label="End Date"
            type="date"
            labelvalue={schoolEndDate1}
            handleChange={handleSchoolEndDate1Change}
          ></InputLabel>
        </div>
      </div>
      <div className="education-input">
        <h4>Education 2</h4>
        <InputLabel
          label="Title"
          type="text"
          labelvalue={schoolTitle2}
          handleChange={handleSchoolTitle2Change}
        ></InputLabel>
        <InputLabel
          label="School"
          type="text"
          labelvalue={schoolName2}
          handleChange={handleSchoolName2Change}
        ></InputLabel>
        <InputLabel
          label="GPA"
          type="number"
          labelvalue={gpa2}
          handleChange={handleGpa2Change}
        ></InputLabel>

        <div className="dates">
          <InputLabel
            label="Start Date"
            type="date"
            labelvalue={schoolStartDate2}
            handleChange={handleSchoolStartDate2Change}
          ></InputLabel>
          <InputLabel
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
