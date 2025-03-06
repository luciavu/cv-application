function Experience() {
  return (
    <>
      <div className="experience">
        <h2>EXPERIENCE</h2>
        <hr />
        <div className="experience-container">
          <div className="container">
            <div className="role-date">
              <div className="title">Software Engineer Intern</div>
              <div className="date">May 2022 - Nov 2022</div>
            </div>
            <div className="company">Embark</div>
            <ul className="job">
              <li>
                Worked with product managers to re-architect a multi-page web app into a single page
                web-app, boosting yearly revenue by $1.4M
              </li>
              <li>
                Constructed the logic for a streamlined ad-serving platform that scaled to our 35M
                users, which improved the page speed by 15% after implementation
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="role-date">
              <div className="title">Software Engineer Intern</div>
              <div className="date">May 2021 - Nov 2021</div>
            </div>
            <div className="company">MarketSmart</div>
            <ul className="job">
              <li>
                Built RESTful APIs that served data to the JavaScript front-end based on dynamically
                chosen user inputs that handled over 500,000 concurrent users
              </li>
              <li>
                Built internal tools using NodeJS and Pupeteer.js to automate QA and monitoring of
                donor-facing web app, which improved CTR by 20%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
