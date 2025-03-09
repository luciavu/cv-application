function Education({
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
  isHidden,
}) {
  return (
    <>
      <div className="education">
        <h2>EDUCATION</h2>
        <hr />
        <div className="education-container">
          <div className="education-info">
            <div className="title">{schoolTitle1}</div>
            <div className="date">
              {schoolStartDate1} - {schoolEndDate1}
            </div>
          </div>
          <div className="education-info2">
            <div className="institution">{schoolName1}</div>
            <div className="gpa">GPA: {gpa1}</div>
          </div>
        </div>
        <div className={`education-container ${isHidden ? 'hidden' : ''}`}>
          <div className="education-info">
            <div className="title">{schoolTitle2}</div>
            <div className="date">
              {schoolStartDate2}- {schoolEndDate2}
            </div>
          </div>
          <div className="education-info2">
            <div className="institution">{schoolName2}</div>
            <div className="gpa">GPA: {gpa2}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
