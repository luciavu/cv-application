import ContactInput from './ContactInput';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';
import ProjectsInput from './ProjectsInput';
import SkillsInput from './SkillsInput';
import Collapsible from './Collapsible';

function InputSection() {
  return (
    <>
      <div className="input-container">
        <h1>cv generator</h1>
        <h3>Fill in the fields below to get started. </h3>
        <Collapsible
          name="Contact"
          inputFields={<ContactInput></ContactInput>}
          isOpen={true}
        ></Collapsible>
        <Collapsible name="Education" inputFields={<EducationInput></EducationInput>}></Collapsible>
        <Collapsible
          name="Experience"
          inputFields={<ExperienceInput></ExperienceInput>}
        ></Collapsible>
        <Collapsible name="Projects" inputFields={<ProjectsInput></ProjectsInput>}></Collapsible>
        <Collapsible name="Skills" inputFields={<SkillsInput></SkillsInput>}></Collapsible>
      </div>
    </>
  );
}

export default InputSection;
