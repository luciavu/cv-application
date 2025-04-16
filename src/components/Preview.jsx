import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

function Preview({
  projName1,
  projName2,
  projLink1,
  projLink2,
  proj1D1,
  proj1D2,
  proj2D1,
  proj2D2,
  languages,
  frameworks,
  databases,
  tools,
  platforms,
}) {
  return (
    <>
      <div className="preview">
        <div className="card">
          <Contact></Contact>
          <Education></Education>
          <Experience></Experience>
          <Projects
            projName1={projName1}
            projName2={projName2}
            projLink1={projLink1}
            projLink2={projLink2}
            proj1D1={proj1D1}
            proj1D2={proj1D2}
            proj2D1={proj2D1}
            proj2D2={proj2D2}
          ></Projects>
          <Skills
            languages={languages}
            frameworks={frameworks}
            databases={databases}
            tools={tools}
            platforms={platforms}
          ></Skills>
        </div>
      </div>
    </>
  );
}
export default Preview;
