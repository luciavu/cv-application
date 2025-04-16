import { useContext } from 'react';
import ExperienceContext from '../context/ExperienceContext';
function Experience() {
  const {
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
    isHidden,
  } = useContext(ExperienceContext);
  return (
    <>
      <div className="experience">
        <h2>EXPERIENCE</h2>
        <hr />
        <div className="experience-container">
          <div className="container">
            <div className="role-date">
              <div className="title">{role1}</div>
              <div className="date">
                {role1StartDate} - {role1EndDate}
              </div>
            </div>
            <div className="company-name">{company1}</div>
            <ul className="job">
              <li>{role1D1}</li>
              <li>{role1D2}</li>
            </ul>
          </div>
          <div className={`container ${isHidden ? 'hidden' : ''}`}>
            <div className="role-date">
              <div className="title">{role2}</div>
              <div className="date">
                {role2StartDate} - {role2EndDate}
              </div>
            </div>
            <div className="company-name">{company2}</div>
            <ul className="job">
              <li>{role2D1}</li>
              <li>{role2D2}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
