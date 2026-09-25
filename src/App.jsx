import { useState } from "react";

import PageLoader from "./components/PageLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <PageLoader
          onComplete={() => setLoading(false)}
        />
      )}

      <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;