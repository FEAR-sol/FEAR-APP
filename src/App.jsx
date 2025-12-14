import DotGrid from './DotGrid';
import ClickSpark from './ClickSpark';
import Navbar from './Navbar';
import Hero from './Hero';
import AITools from './AITools';
import Services from './Services';
import BeforeWeBegin from './BeforeWeBegin';
import Projects from './Projects';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <ClickSpark
      sparkColor='#3A5A78'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      <div className="app">
        <DotGrid
          dotSize={5}
          gap={20}
          baseColor="#1a1a2e"
          activeColor="#3A5A78"
          proximity={180}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="background"
        />
        <Navbar />
        <Hero />
        <AITools />
        <Services />
        <BeforeWeBegin />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
