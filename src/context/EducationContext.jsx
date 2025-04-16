import { createContext, useState } from 'react';

const EducationContext = createContext();

export const EducationProvider = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);
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

  return (
    <EducationContext.Provider
      value={{
        schoolTitle1,
        setSchoolTitle1,
        schoolTitle2,
        setSchoolTitle2,
        schoolName1,
        setSchoolName1,
        schoolName2,
        setSchoolName2,
        gpa1,
        setGpa1,
        gpa2,
        setGpa2,
        schoolStartDate1,
        setSchoolStartDate1,
        schoolStartDate2,
        setSchoolStartDate2,
        schoolEndDate1,
        setSchoolEndDate1,
        schoolEndDate2,
        setSchoolEndDate2,
        isHidden,
        setIsHidden,
      }}
    >
      {children}
    </EducationContext.Provider>
  );
};

export default EducationContext;
