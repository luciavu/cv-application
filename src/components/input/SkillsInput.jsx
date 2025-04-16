import InputLabel from './InputLabel';
import { useContext } from 'react';
import SkillsContext from '../../context/SkillsContext';

function SkillsInput() {
  const {
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
  } = useContext(SkillsContext);

  const handleLanguagesChange = (e) => setLanguages(e.target.value);
  const handleFrameworksChange = (e) => setFrameworks(e.target.value);
  const handleDatabasesChange = (e) => setDatabases(e.target.value);
  const handleToolsChange = (e) => setTools(e.target.value);
  const handlePlatformsChange = (e) => setPlatforms(e.target.value);

  return (
    <>
      <InputLabel
        id="languages"
        label="Languages"
        type="text"
        labelvalue={languages}
        handleChange={handleLanguagesChange}
      ></InputLabel>
      <InputLabel
        id="frameworks"
        label="Technologies/Frameworks"
        type="text"
        labelvalue={frameworks}
        handleChange={handleFrameworksChange}
      ></InputLabel>
      <InputLabel
        id="databases"
        label="Databases"
        type="text"
        labelvalue={databases}
        handleChange={handleDatabasesChange}
      ></InputLabel>
      <InputLabel
        id="tools"
        label="Software and Tools"
        type="text"
        labelvalue={tools}
        handleChange={handleToolsChange}
      ></InputLabel>
      <InputLabel
        id="platforms"
        label="Platforms"
        type="text"
        labelvalue={platforms}
        handleChange={handlePlatformsChange}
      ></InputLabel>
    </>
  );
}

export default SkillsInput;
