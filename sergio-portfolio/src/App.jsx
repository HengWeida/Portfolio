import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// App is the "parent". It just stacks every section from top to bottom.
export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        {/* Pulled up a little so the first row overlaps the hero, like Netflix */}
        <div className="relative z-10 -mt-16">
          <Skills />
          <Projects />
        </div>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
