import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Preview from './components/Preview';
import InputSection from './components/input/InputSection';

function App() {
  // Hidden fields
  const [isHiddenEdu, setIsHiddenEdu] = useState(false);
  const [isHiddenExp, setIsHiddenExp] = useState(false);

  // Contact
  const [name, setName] = useState('Your Name');
  const [phone, setPhone] = useState('(+61) 412 345 678');
  const [email, setEmail] = useState('email@domain.com');
  const [website, setWebsite] = useState('linkedin.com/in/example');

  // Education
  const [schoolTitle1, setSchoolTitle1] = useState('Masters in Science, Software Engineering');
  const [schoolTitle2, setSchoolTitle2] = useState('Bachelor of Engineering, Computer Engineering');
  const [schoolName1, setSchoolName1] = useState('Example University');
  const [schoolName2, setSchoolName2] = useState('Example University');
  const [gpa1, setGpa1] = useState('3.82');
  const [gpa2, setGpa2] = useState('3.25');
  const [schoolStartDate1, setSchoolStartDate1] = useState('Aug 2019');
  const [schoolStartDate2, setSchoolStartDate2] = useState('Aug 2015');
  const [schoolEndDate1, setSchoolEndDate1] = useState('May 2022');
  const [schoolEndDate2, setSchoolEndDate2] = useState('Jun 2017');

  // Experience
  const [role1StartDate, setRole1StartDate] = useState('May 2022');
  const [role2StartDate, setRole2StartDate] = useState('May 2021');
  const [role1EndDate, setRole1EndDate] = useState('Nov 2022');
  const [role2EndDate, setRole2EndDate] = useState('Nov 2021');
  const [role1, setRole1] = useState('Software Engineer Intern');
  const [role2, setRole2] = useState('Software Engineer Intern');
  const [company1, setCompany1] = useState('Embark');
  const [company2, setCompany2] = useState('MarketSmart');
  const [role1D1, setRole1D1] = useState(
    'Worked with product managers to re-architect a multi-page web app into a single page web-app, boosting yearly revenue by $1.4M'
  );
  const [role1D2, setRole1D2] = useState(
    'Constructed the logic for a streamlined ad-serving platform that scaled to our 35M users, which improved the page speed by 15% after implementation'
  );
  const [role2D1, setRole2D1] = useState(
    'Built RESTful APIs that served data to the JavaScript front-end based on dynamically chosen user inputs that handled over 500,000 concurrent users'
  );
  const [role2D2, setRole2D2] = useState(
    'Built internal tools using NodeJS and Pupeteer.js to automate QA and monitoring of donor-facing web app, which improved CTR by 20%'
  );

  // Projects
  const [projName1, setProjName1] = useState('Poker Simulation');
  const [projName2, setProjName2] = useState('Real-Time Interactive 3D-Graphics Website');
  const [projLink1, setProjLink1] = useState('https://link-to-project.com');
  const [projLink2, setProjLink2] = useState('https://link-to-project.com');
  const [proj1D1, setProj1D1] = useState(
    'Built a full-stack web app to allow users to simulate and visualize outcomes of poker hands against opponents of different play styles using open source cards.js on the front-end'
  );
  const [proj1D2, setProj1D2] = useState(
    'Utilized sci-kit learn in Python to simulate possible outcomes under different scenarios that the user chose'
  );
  const [proj2D1, setProj2D1] = useState(
    'Developed an interactive graphics website using THREE.js to create a 3D workspace with real-time animated 3D models of crystal lattice structures and robotic parts in which animations and camera views can be manipulated.'
  );
  const [proj2D2, setProj2D2] = useState(
    'Utilized Python, Flask, Heroku, JavaScript, AJAX, THREE.js, HTML/CSS, Docker, Git'
  );

  // Skills
  const [languages, setLanguages] = useState('Java, Python, JavaScript, SQL, C, C++, Bash');
  const [frameworks, setFrameworks] = useState(
    'NodeJS, Express, ReactJS, Django, JSON, Kafka, Flask, Spark'
  );
  const [databases, setDatabases] = useState('PostgreSQL, MongoDB, MySQL');
  const [tools, setTools] = useState('Git, VSCode, GitHub, JIRA, Postman, Selenium');
  const [platforms, setPlatforms] = useState('AWS EC2, Linux, MACOS, Docker, Kubernetes');

  return (
    <>
      <Header></Header>
      <div className="app-container">
        <InputSection
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          website={website}
          setWebsite={setWebsite}
          schoolTitle1={schoolTitle1}
          setSchoolTitle1={setSchoolTitle1}
          schoolTitle2={schoolTitle2}
          setSchoolTitle2={setSchoolTitle2}
          schoolName1={schoolName1}
          setSchoolName1={setSchoolName1}
          schoolName2={schoolName2}
          setSchoolName2={setSchoolName2}
          gpa1={gpa1}
          setGpa1={setGpa1}
          gpa2={gpa2}
          setGpa2={setGpa2}
          schoolStartDate1={schoolStartDate1}
          setSchoolStartDate1={setSchoolStartDate1}
          schoolStartDate2={schoolStartDate2}
          setSchoolStartDate2={setSchoolStartDate2}
          schoolEndDate1={schoolEndDate1}
          setSchoolEndDate1={setSchoolEndDate1}
          schoolEndDate2={schoolEndDate2}
          setSchoolEndDate2={setSchoolEndDate2}
          isHiddenEdu={isHiddenEdu}
          setIsHiddenEdu={setIsHiddenEdu}
          role1StartDate={role1StartDate}
          set1RoleStartDate={setRole1StartDate}
          role2StartDate={role2StartDate}
          setRole2StartDate={setRole2StartDate}
          role1EndDate={role1EndDate}
          set1RoleEndDate={setRole1EndDate}
          role2EndDate={role2EndDate}
          setRole2EndDate={setRole2EndDate}
          role1={role1}
          setRole1={setRole1}
          role2={role2}
          setRole2={setRole2}
          company1={company1}
          setCompany1={setCompany1}
          company2={company2}
          setCompany2={setCompany2}
          role1D1={role1D1}
          setRole1D1={setRole1D1}
          role1D2={role1D2}
          setRole1D2={setRole1D2}
          role2D1={role2D1}
          setRole2D1={setRole2D1}
          role2D2={role2D2}
          setRole2D2={setRole2D2}
          isHiddenExp={isHiddenExp}
          setIsHiddenExp={setIsHiddenExp}
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
        />
        <Preview
          name={name}
          phone={phone}
          email={email}
          website={website}
          schoolTitle1={schoolTitle1}
          schoolTitle2={schoolTitle2}
          schoolName1={schoolName1}
          schoolName2={schoolName2}
          gpa1={gpa1}
          gpa2={gpa2}
          schoolStartDate1={schoolStartDate1}
          schoolStartDate2={schoolStartDate2}
          schoolEndDate1={schoolEndDate1}
          schoolEndDate2={schoolEndDate2}
          isHiddenEdu={isHiddenEdu}
          role1StartDate={role1StartDate}
          role2StartDate={role2StartDate}
          role1EndDate={role1EndDate}
          role2EndDate={role2EndDate}
          role1={role1}
          role2={role2}
          company1={company1}
          company2={company2}
          role1D1={role1D1}
          role1D2={role1D2}
          role2D1={role2D1}
          role2D2={role2D2}
          isHiddenExp={isHiddenExp}
          projName1={projName1}
          projName2={projName2}
          projLink1={projLink1}
          projLink2={projLink2}
          proj1D1={proj1D1}
          proj1D2={proj1D2}
          proj2D1={proj2D1}
          proj2D2={proj2D2}
          languages={languages}
          frameworks={frameworks}
          databases={databases}
          tools={tools}
          platforms={platforms}
        />
      </div>
    </>
  );
}

export default App;
