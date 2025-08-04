import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AMLDashboard from "./pages/AMLDashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<AMLDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
