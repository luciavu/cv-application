import ContactInput from './ContactInput';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';
import ProjectsInput from './ProjectsInput';
import SkillsInput from './SkillsInput';
import Collapsible from './Collapsible';
import { FaGithub } from 'react-icons/fa';

function InputSection({
  languages,
  setLanguages,
  frameworks,
  setFrameworks,
  databases,
  setDatabases,
  tools,
  setTools,
  platforms,
  setPlatforms,
}) {
  return (
    <>
      <div className="input-container">
        <div className="heading">
          <a
            className="github-link"
            href="https://github.com/luciavu/cv-application"
            target="_blank"
          >
            <FaGithub />
          </a>
          <h1>cv generator</h1>
        </div>

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
        <Collapsible
          name="Skills"
          inputFields={
            <SkillsInput
              languages={languages}
              setLanguages={setLanguages}
              frameworks={frameworks}
              setFrameworks={setFrameworks}
              databases={databases}
              setDatabases={setDatabases}
              tools={tools}
              setTools={setTools}
              platforms={platforms}
              setPlatforms={setPlatforms}
            ></SkillsInput>
          }
        ></Collapsible>
      </div>
    </>
  );
}

export default InputSection;
