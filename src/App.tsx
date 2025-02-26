import './App.css'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HeroCreationSteps from './pages/HeroCreationSteps';
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
import BattleSpells from './pages/BattleSpells';
import HeroicArchetypes from './pages/HeroicArchetypes';
import LegendaryArchetypes from './pages/LegendaryArchetypes';
import RitualSpells from './pages/RitualSpells';
import Armor from './pages/Armor';
import Weapons from './pages/Weapons';
import Mounts from './pages/Mounts';
import OtherGoods from './pages/Other Goods';
import Consumables from './pages/Consumables';
import Relics from './pages/Relics';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero-creation-steps" element={<HeroCreationSteps />} />
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
            <Route path='/battle-spells' element={<BattleSpells />} />
            <Route path='/armor' element={<Armor />} />
            <Route path='/weapons' element={<Weapons />} />
            <Route path='/other-goods' element={<OtherGoods />} />
            <Route path='/mounts' element={<Mounts />} />
            <Route path='/heroic-archetypes' element={<HeroicArchetypes />} />
            <Route path='/legendary-archetypes' element={<LegendaryArchetypes />} />
            <Route path='/ritual-spells' element={<RitualSpells />} />
            <Route path='/consumables' element={<Consumables />} />
            <Route path='/relics' element={<Relics />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
