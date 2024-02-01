import  styles from "./App.module.css"; 
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import{About} from "./Components/AboutMe/About";
import { Experience } from "./Components/Experiernce/Experience";
import { Projects} from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact/>
    </div>
   
      
}

export default App
