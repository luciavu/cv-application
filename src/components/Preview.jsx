import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

function Preview() {
  return (
    <>
      <div className="preview">
        <div className="card">
          <Contact></Contact>
          <Education></Education>
          <Experience></Experience>
          <Projects></Projects>
          <Skills></Skills>
        </div>
      </div>
    </>
  );
}
export default Preview;
