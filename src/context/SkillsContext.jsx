import { createContext, useState } from 'react';

const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [languages, setLanguages] = useState('Java, Python, JavaScript, SQL, C, C++, Bash');
  const [frameworks, setFrameworks] = useState(
    'NodeJS, Express, ReactJS, Django, JSON, Kafka, Flask, Spark'
  );
  const [databases, setDatabases] = useState('PostgreSQL, MongoDB, MySQL');
  const [tools, setTools] = useState('Git, VSCode, GitHub, JIRA, Postman, Selenium');
  const [platforms, setPlatforms] = useState('AWS EC2, Linux, MACOS, Docker, Kubernetes');

  return (
    <SkillsContext.Provider
      value={{
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
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsContext;
