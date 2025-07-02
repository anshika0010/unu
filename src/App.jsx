import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages/components
import Home from "./pages/Home";
import LoginPage from "./components/LoginPage";
import IngredientologyPage from "./pages/IngredientologyPage";
import SignUpPage from "./components/SignUpPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/ingredientology" element={<IngredientologyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
