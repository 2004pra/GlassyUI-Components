import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlassyUILandingPage from './components/GlassyUILandingPage';
import GlassyUIComponentsPage from './components/GlassyUIComponentsPage';
import ButtonDetailsPage from './components/ButtonDetailsPage';
import CardDetailsPage from './components/CardDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlassyUILandingPage />} />
        <Route path="/components" element={<GlassyUIComponentsPage />} />
        <Route path="/button-details" element={<ButtonDetailsPage />} />
        <Route path="/card-details" element={<CardDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;