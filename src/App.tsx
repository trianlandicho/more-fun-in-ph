import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Boracay from "./pages/boracay";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Destination Detail Page */}
        <Route path="/boracay" element={<Boracay />} />
      </Routes>
    </Router>
  );
}

export default App;
