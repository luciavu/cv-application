import { createContext, useState } from 'react';

const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);
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

  return (
    <ExperienceContext.Provider
      value={{
        role1StartDate,
        setRole1StartDate,
        role2StartDate,
        setRole2StartDate,
        role1EndDate,
        setRole1EndDate,
        role2EndDate,
        setRole2EndDate,
        role1,
        setRole1,
        role2,
        setRole2,
        company1,
        setCompany1,
        company2,
        setCompany2,
        role1D1,
        setRole1D1,
        role1D2,
        setRole1D2,
        role2D1,
        setRole2D1,
        role2D2,
        setRole2D2,
        isHidden,
        setIsHidden,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContext;
