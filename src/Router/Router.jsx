import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Tracking from "../Pages/Tracking/Tracking";
import ErrorPage from "../Pages/Error";
function HalamanRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default HalamanRouter;
