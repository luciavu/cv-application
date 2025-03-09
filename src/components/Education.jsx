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
}) {
  return (
    <>
      <div className="education">
        <h2>EDUCATION</h2>
        <hr />
        <div className="education-container">
          <div className="education-info">
            <div className="title">{schoolTitle1}</div>
            <div className="date"> {schoolStartDate1} - May 2022</div>
          </div>
          <div className="education-info2">
            <div className="institution">Example University</div>
            <div className="gpa">GPA: 3.82</div>
          </div>
        </div>
        <div className="education-container">
          <div className="education-info">
            <div className="title">Bachelor of Engineering, Computer Engineering</div>
            <div className="date">Aug 2015 - Jun 2017</div>
          </div>
          <div className="education-info2">
            <div className="institution">Example University</div>
            <div className="gpa">GPA: 3.25</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
