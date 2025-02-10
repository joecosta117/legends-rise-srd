import './App.css'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HeroCreationSteps from './pages/HeroCreationSteps';
import BkgdKnacks from './pages/BkgdKnacks';
import Ancestries from './pages/Ancestries';
import Classes from './pages/Classes';

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
            {/* <Route exact path="/5e-classes" component={ContentPage} />
            <Route exact path="/5e-magic-items" component={ContentPage} />
            <Route exact path="/5e-monsters" component={ContentPage} />
            <Route exact path="/5e-subclasses" component={SubclassesPage} />
            <Route exact path="/5e-races" component={ContentPage} />
            <Route exact path="/5e-systems" component={ContentPage} />
            <Route exact path="/5e-spells" component={ContentPage} />
            <Route exact path="/2e-ancestries" component={ContentPage} />
            <Route exact path="/2e-archetypes" component={ContentPage} />
            <Route exact path="/2e-classes" component={ContentPage} />
            <Route exact path="/2e-magic-items" component={ContentPage} />
            <Route exact path="/2e-monsters" component={ContentPage} />
            <Route exact path="/contact" component={EmailPage} /> */}
          </Routes>
        </div>
    </Router>
  )
}

export default App
