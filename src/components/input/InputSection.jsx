import ContactInput from './ContactInput';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';
import ProjectsInput from './ProjectsInput';
import SkillsInput from './SkillsInput';
import Collapsible from './Collapsible';
import { FaGithub } from 'react-icons/fa';

function InputSection({
  projName1,
  setProjName1,
  projName2,
  setProjName2,
  projLink1,
  setProjLink1,
  projLink2,
  setProjLink2,
  proj1D1,
  setProj1D1,
  proj1D2,
  setProj1D2,
  proj2D1,
  setProj2D1,
  proj2D2,
  setProj2D2,
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
        <Collapsible
          name="Projects"
          inputFields={
            <ProjectsInput
              projName1={projName1}
              setProjName1={setProjName1}
              projName2={projName2}
              setProjName2={setProjName2}
              projLink1={projLink1}
              setProjLink1={setProjLink1}
              projLink2={projLink2}
              setProjLink2={setProjLink2}
              proj1D1={proj1D1}
              setProj1D1={setProj1D1}
              proj1D2={proj1D2}
              setProj1D2={setProj1D2}
              proj2D1={proj2D1}
              setProj2D1={setProj2D1}
              proj2D2={proj2D2}
              setProj2D2={setProj2D2}
            ></ProjectsInput>
          }
        ></Collapsible>
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
