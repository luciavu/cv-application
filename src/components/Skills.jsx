import { useContext } from 'react';
import SkillsContext from '../context/SkillsContext';

function Skills() {
  const { languages, frameworks, databases, tools, platforms } = useContext(SkillsContext);

  return (
    <>
      <div className="skills">
        <h2>SKILLS</h2>
        <hr />
        <div className="skills-container">
          <div className="languages">
            <div className="skill">Languages:</div>
            <div className="skill-detail">{languages}</div>
          </div>
          <div className="frameworks">
            <div className="skill">Technologies/Frameworks:</div>
            <div className="skill-detail">{frameworks}</div>
          </div>
          <div className="databases">
            <div className="skill">Databases:</div>
            <div className="skill-detail">{databases}</div>
          </div>
          <div className="software">
            <div className="skill">Software and Tools:</div>
            <div className="skill-detail">{tools}</div>
          </div>
          <div className="platforms">
            <div className="skill">Platforms:</div>
            <div className="skill-detail">{platforms}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
