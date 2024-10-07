import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlassyUILandingPage from "./components/GlassyUILandingPage";
import GlassyUIComponentsPage from "./components/GlassyUIComponentsPage";
import ButtonDetailsPage from "./components/ButtonDetailsPage";
import CardDetailsPage from "./components/CardDetailsPage";
import ProgressBarDetailPage from "./components/ProgressBarDetailPage";
import PopupDetailPage from "./components/PopupDetailPage";
import InputDetailPage from "./components/InputDetailPage";
import TextareaDetailPage from "./components/TextareaDetailPage";
import NotFoundPage from "./components/NotFoundPage";
import TooltipDetailsPage from "./components/TooltipDetailsPage";
import SpeedDialDetailsPage from "./components/SpeedDialDetailsPage";
import ModalDetailsPage from "./components/ModalDetailsPage";
import './index.css';  // Import custom CSS

const App: React.FC = () => {
  // Function to handle mouse movement and create the fairy dust effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dot = document.createElement("div");
      dot.className = "fairy-dust";
      document.body.appendChild(dot);
      
      dot.style.left = `${e.pageX}px`;
      dot.style.top = `${e.pageY}px`;

      setTimeout(() => {
        dot.remove();
      }, 1000);  // Remove the dot after 1 second
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlassyUILandingPage />} />
        <Route path="/components" element={<GlassyUIComponentsPage />} />
        <Route path="/button-details" element={<ButtonDetailsPage />} />
        <Route path="/card-details" element={<CardDetailsPage />} />
        <Route
          path="/progress-bar-details"
          element={<ProgressBarDetailPage />}
        />
        <Route path="/popup-details" element={<PopupDetailPage />} />
        <Route path="/input-details" element={<InputDetailPage />} />
        <Route path="/textarea-details" element={<TextareaDetailPage />} />
        <Route path="/tooltip-details" element={<TooltipDetailsPage />} />
        <Route path="/speed-dial-details" element={<SpeedDialDetailsPage />} />
        <Route path="/modal-details" element={<ModalDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
