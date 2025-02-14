import './App.css'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HeroCreationSteps from './pages/HeroCreationSteps';
import BkgdKnacks from './pages/BkgdKnacks';
import Ancestries from './pages/Ancestries';
import Classes from './pages/Classes';
import Arcanist from './pages/Arcanist';
import Bard from './pages/Bard';
import Cleric from './pages/Cleric';
import Commander from './pages/Commander';
import Druid from './pages/Druid';
import Magesmith from './pages/Magesmith';
import Occultist from './pages/Occultist';
import Paladin from './pages/Paladin';
import Ranger from './pages/Ranger';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero-creation-steps" element={<HeroCreationSteps />} />
            <Route path="/background-and-knacks" element={<BkgdKnacks />} />
            <Route path="/ancestries" element={<Ancestries />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/arcanist" element={<Arcanist />} />
            <Route path="/classes/bard" element={<Bard />} />
            <Route path="/classes/cleric" element={<Cleric />} />
            <Route path="/classes/commander" element={<Commander />} />
            <Route path='/classes/druid' element={<Druid />} />
            <Route path='/classes/magesmith' element={<Magesmith />} />
            <Route path='/classes/occultist' element={<Occultist />} />
            <Route path='/classes/paladin' element={<Paladin />} />
            <Route path='/classes/ranger' element={<Ranger />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
