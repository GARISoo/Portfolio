import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import ContactPage from './Pages/ContactPage/ContactPage';
import HomePage from './Pages/HomePage/HomePage';
import ResumePage from './Pages/ResumePage/ResumePage';

const App = () => (
  <div className="portfolio">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
