import "./App.css";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Earn from "./pages/Earn";
import { Privacy } from "./pages/Privacy";
import { Refund } from "./pages/Refund";
import Search from "./pages/Search";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <div className="App">
      <Routes>
      {/* <Route path="*" element={<Footer />} /> */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="refund" element={<Refund />} />
        <Route path="earn" element={<Earn />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
