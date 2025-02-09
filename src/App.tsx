import './App.css'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HeroCreationSteps from './pages/HeroCreationSteps';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero-creation-steps" element={<HeroCreationSteps />} />
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
