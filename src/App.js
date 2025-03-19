import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Casinopage from "./screens/CasinoPage/Casinopage";
import Transactionpage from "./screens/TransactionPage/Transactionpage";
import MatchDetail from "./screens/HomePage/matchProfile/MatchDetail";
import CenterLeague from "./screens/HomePage/centerPart/CenterLeague";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<CenterLeague />} />
          <Route path="/matchprofile" element={<MatchDetail />} />
          <Route path="/casino" element={<Casinopage />} />
          <Route path="/transaction" element={<Transactionpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
