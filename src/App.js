import './App.css';
import Intro from './components/intro/Intro'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ProjectList from './components/projectlist/ProjectList';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Skills />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
