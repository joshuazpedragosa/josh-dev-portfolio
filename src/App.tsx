import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_35%)]" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
