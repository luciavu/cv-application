import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

function Preview({
  name,
  phone,
  email,
  website,
  schoolTitle1,
  schoolTitle2,
  schoolName1,
  schoolName2,
  gpa1,
  gpa2,
  schoolStartDate1,
  schoolStartDate2,
  schoolEndDate1,
  schoolEndDate2,
  isHiddenEdu,
  role1StartDate,
  role2StartDate,
  role1EndDate,
  role2EndDate,
  role1,
  role2,
  company1,
  company2,
  role1D1,
  role1D2,
  role2D1,
  role2D2,
  isHiddenExp,
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
          <Contact name={name} phone={phone} email={email} website={website}></Contact>
          <Education
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
            isHidden={isHiddenEdu}
          ></Education>
          <Experience
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
            isHidden={isHiddenExp}
          ></Experience>
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
