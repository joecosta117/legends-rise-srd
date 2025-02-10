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
          </Routes>
        </div>
    </Router>
  )
}

export default App
