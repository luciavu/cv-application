import InputLabel from './InputLabel';

function SkillsInput({
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
  const handleLanguagesChange = (e) => setLanguages(e.target.value);
  const handleFrameworksChange = (e) => setFrameworks(e.target.value);
  const handleDatabasesChange = (e) => setDatabases(e.target.value);
  const handleToolsChange = (e) => setTools(e.target.value);
  const handlePlatformsChange = (e) => setPlatforms(e.target.value);

  return (
    <>
      <InputLabel
        label="Languages"
        type="text"
        labelvalue={languages}
        handleChange={handleLanguagesChange}
      ></InputLabel>
      <InputLabel
        label="Technologies/Frameworks"
        type="text"
        labelvalue={frameworks}
        handleChange={handleFrameworksChange}
      ></InputLabel>
      <InputLabel
        label="Databases"
        type="text"
        labelvalue={databases}
        handleChange={handleDatabasesChange}
      ></InputLabel>
      <InputLabel
        label="Software and Tools"
        type="text"
        labelvalue={tools}
        handleChange={handleToolsChange}
      ></InputLabel>
      <InputLabel
        label="Platforms"
        type="text"
        labelvalue={platforms}
        handleChange={handlePlatformsChange}
      ></InputLabel>
    </>
  );
}

export default SkillsInput;
