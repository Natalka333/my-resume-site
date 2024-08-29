
import './App.css'
import Contacts from './components/Contacts/Contacts'
import Education from './components/Education/Education'
import Languages from './components/Languages/Languages'
import Profile from './components/Profile/Profile'
import ProjectExperience from './components/ProjectExperience/ProjectExperience'
import SoftSkills from './components/SoftSkills/SoftSkills'
import Summary from './components/Summary/Summary'
import TechSkills from './components/TechSkills/TechSkills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ProfileList from './ProfileList/ProfileList'

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <div className="left-section">
          <Profile />
          <Contacts />
          <TechSkills />
          <SoftSkills />
          <Languages />
        </div>
        <div className="right-section">
          <ProfileList />
          <Summary />
          <ProjectExperience />
          <WorkExperience />
          <Education />
        </div>
      </header>
    </div>
  )
}


export default App
