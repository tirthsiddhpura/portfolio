import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Resume />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
