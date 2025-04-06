import React from 'react';
import Navbar from './components/Navbar';
import SkillsChart from './components/SkillsChart';
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Switch from './components/Switch';


const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <SkillsChart />
      <Projects />
      <Switch />
      <Footer />
      
    </div>
  );
}

export default App;