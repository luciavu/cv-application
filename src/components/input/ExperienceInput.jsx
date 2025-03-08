import InputLabel from './InputLabel';

function ExperienceInput() {
  return (
    <>
      <div className="dates">
        <InputLabel label="Start Date" type="date"></InputLabel>
        <InputLabel label="End Date" type="date"></InputLabel>
      </div>
      <InputLabel label="Role" type="text"></InputLabel>
      <InputLabel label="Company" type="text"></InputLabel>
      <InputLabel label="Responsbilities 1" type="text"></InputLabel>
      <InputLabel label="Responsbilities 2" type="text"></InputLabel>
    </>
  );
}

export default ExperienceInput;
