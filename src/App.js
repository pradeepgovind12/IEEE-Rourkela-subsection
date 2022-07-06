import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Email from "./pages/Email";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chairman from "./pages/message/Chairman";
import Secretary from "./pages/message/Secretary";
import Treasure from "./pages/message/Treasure";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<Email />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/message/chairman" element={<Chairman />} />
        <Route path="/message/secretary" element={<Secretary />} />
        <Route path="/message/treasure" element={<Treasure />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
