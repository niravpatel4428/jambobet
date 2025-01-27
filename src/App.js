import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./screens/HomePage/Homepage";
import Casinopage from "./screens/CasinoPage/Casinopage";
import Transactionpage from "./screens/TransactionPage/Transactionpage";
function App() {
  return (
      <Router>
        <Routes>
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/casino" element={<Casinopage />} />
          <Route path="/transaction" element={<Transactionpage />} />
        </Routes>
      </Router>
  );
}

export default App;
