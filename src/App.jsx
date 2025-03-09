import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Preview from './components/Preview';
import InputSection from './components/input/InputSection';

function App() {
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
  const [role1StartDate, setRole1StartDate] = useState('');
  const [role2StartDate, setRole2StartDate] = useState('');
  const [role1EndDate, setRole1EndDate] = useState('');
  const [role2EndDate, setRole2EndDate] = useState('');
  const [role1, setRole1] = useState('');
  const [role2, setRole2] = useState('');
  const [company1, setCompany1] = useState('');
  const [company2, setCompany2] = useState('');
  const [role1D1, setRole1D1] = useState('');
  const [role1D2, setRole1D2] = useState('');
  const [role2D1, setRole2D1] = useState('');
  const [role2D2, setRole2D2] = useState('');

  // Projects
  const [projName1, setProjName1] = useState('');
  const [projName2, setProjName2] = useState('');
  const [projLink1, setProjLink1] = useState('');
  const [projLink2, setProjLink2] = useState('');
  const [proj1D1, setProj1D1] = useState('');
  const [proj1D2, setProj1D2] = useState('');
  const [proj2D1, setProj2D1] = useState('');
  const [proj2D2, setProj2D2] = useState('');

  // Skills
  const [languages, setLanguages] = useState('');
  const [frameworks, setFrameworks] = useState('');
  const [databases, setDatabases] = useState('');
  const [tools, setTools] = useState('');
  const [platforms, setPlatforms] = useState('');

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
