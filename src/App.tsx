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
import Rogue from './pages/Rogue';
import Summoner from './pages/Summoner';
import Swordmage from './pages/Swordmage';
import Warrior from './pages/Warrior';
import DualClass from './pages/DualClass';
import ThemeTalents from './pages/ThemeTalents';
import FightingStyles from './pages/FightingStyles';
import Spells from './pages/Spells';

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
            <Route path='/classes/rogue' element={<Rogue />} />
            <Route path='/classes/summoner' element={<Summoner />} />
            <Route path='/classes/swordmage' element={<Swordmage />} />
            <Route path='/classes/warrior' element={<Warrior />} />
            <Route path='/classes/dual-class' element={<DualClass />} />
            <Route path='/theme-talents' element={<ThemeTalents />} />
            <Route path='/fighting-styles' element={<FightingStyles />} />
            <Route path='/spells' element={<Spells />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
