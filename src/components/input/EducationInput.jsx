import InputLabel from './InputLabel';
function EducationInput() {
  return (
    <>
      <div className="education-input">
        <h4>Education 1</h4>
        <InputLabel label="Title" type="text"></InputLabel>
        <InputLabel label="School" type="text"></InputLabel>
        <InputLabel label="GPA" type="number"></InputLabel>

        <div className="dates">
          <InputLabel label="Start Date" type="date"></InputLabel>
          <InputLabel label="End Date" type="date"></InputLabel>
        </div>
      </div>
      <div className="education-input">
        <h4>Education 2</h4>
        <InputLabel label="Title" type="text"></InputLabel>
        <InputLabel label="School" type="text"></InputLabel>
        <InputLabel label="GPA" type="number"></InputLabel>

        <div className="dates">
          <InputLabel label="Start Date" type="date"></InputLabel>
          <InputLabel label="End Date" type="date"></InputLabel>
        </div>
      </div>
    </>
  );
}

export default EducationInput;
