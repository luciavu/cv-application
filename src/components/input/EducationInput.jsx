import InputLabel from './InputLabel';
function EducationInput() {
  return (
    <>
      <InputLabel label="Title" type="text"></InputLabel>
      <InputLabel label="School" type="text"></InputLabel>
      <InputLabel label="GPA" type="number"></InputLabel>

      <div className="dates">
        <InputLabel label="Start Date" type="date"></InputLabel>
        <InputLabel label="End Date" type="date"></InputLabel>
      </div>
    </>
  );
}

export default EducationInput;
