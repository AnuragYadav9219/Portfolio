import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Sun, Moon } from 'lucide-react';
import { Toaster } from 'sonner';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="font-sans text-textDark dark:text-textLight scroll-smooth transition-colors duration-300 overflow-x-hidden">
      <button
        onClick={handleThemeToggle}
        aria-label="Toggle Theme"
        title="Switch Theme"
        className={
          `fixed bottom-5 right-5 z-50 p-4 max-w-[calc(100vw-2rem)] overflow-hidden animate-bounce rounded-full transition duration-300 
          bg-white dark:bg-gray-900 text-blue-600 dark:text-yellow-400 border border-gray-500 dark:border-yellow-300
          shadow-md shadow-white backdrop-blur hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transform ease-in-out`
        }
      >
        {/* Pulsing Glow Ring */}
        <span
          className={`absolute inset-0 rounded-full blur-xl opacity-40 animate-ping z-[-1] 
          ${isDarkMode ? 'bg-yellow-400' : 'bg-blue-400'}`}
        />

        {/* Icon */}
        {isDarkMode ? (
          <Moon className="w-6 h-6" strokeWidth={2} />
        ) : (
          <Sun className="w-6 h-6" strokeWidth={2} />
        )}
      </button>

      <Toaster position='top-right' richColors />

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
