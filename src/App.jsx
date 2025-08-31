import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './i18n';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Support from './pages/Support';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
