import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Product Detail Page */}
        <Route path="/destination" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
