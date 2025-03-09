function Skills({ languages, frameworks, databases, tools, platforms }) {
  return (
    <>
      <div className="skills">
        <h2>SKILLS</h2>
        <hr />
        <div className="skills-container">
          <div className="languages">
            <div className="skill">Languages:</div>
            <div className="skill-detail">
              Java, Python, JavaScript, SQL, C, C++, Bash{languages}
            </div>
          </div>
          <div className="frameworks">
            <div className="skill">Technologies/Frameworks:</div>
            <div className="skill-detail">
              NodeJS, Express, ReactJS, Django, JSON, Kafka, Flask, Spark{frameworks}
            </div>
          </div>
          <div className="databases">
            <div className="skill">Databases:</div>
            <div className="skill-detail">PostgreSQL, MongoDB, MySQL</div>
          </div>
          <div className="software">
            <div className="skill">Software and Tools:</div>
            <div className="skill-detail">Git, VSCode, GitHub, JIRA, Postman, Selenium</div>
          </div>
          <div className="platforms">
            <div className="skill">Platforms:</div>
            <div className="skill-detail">AWS EC2, Linux, MACOS, Docker, Kubernetes</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
