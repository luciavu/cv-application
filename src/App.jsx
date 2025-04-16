import './App.css';
import Preview from './components/Preview';
import InputSection from './components/input/InputSection';
import { ContactProvider } from './context/ContactContext';
import { EducationProvider } from './context/EducationContext';
import { ExperienceProvider } from './context/ExperienceContext';
import { ProjectsProvider } from './context/ProjectsContext';
import { SkillsProvider } from './context/SkillsContext';

function App() {
  return (
    <>
      <div className="app-container">
        <ContactProvider>
          <EducationProvider>
            <ExperienceProvider>
              <ProjectsProvider>
                <SkillsProvider>
                  <InputSection />
                  <Preview />
                </SkillsProvider>
              </ProjectsProvider>
            </ExperienceProvider>
          </EducationProvider>
        </ContactProvider>
      </div>
    </>
  );
}

export default App;
