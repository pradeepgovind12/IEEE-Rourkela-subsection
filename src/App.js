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
import FooterUpper from "./components/FooterUpper";
import Event from "./pages/event/Event";
import Society from "./pages/society/Society";
import Student from "./pages/student/Student";
import Academic from "./pages/academic/Academic";
import Members from "./pages/members/Members";
import Slate from "./pages/slate/Slate";
import Report from "./pages/report/Report";
import Activity from "./pages/activity/Activity";
import Social from "./pages/social/Social";
import Tech from "./pages/tech/Tech";
import Mission from "./pages/mission/Mission";
import Pride from "./pages/pride/Pride";
import Awards from "./components/awards/Awards";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <FooterUpper />
            </>
          }
        />
        <Route path="/email" element={<Email />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/message/chairman" element={<Chairman />} />
        <Route path="/message/secretary" element={<Secretary />} />
        <Route path="/message/treasure" element={<Treasure />} />
        <Route path="/event" element={<Event />} />
        <Route path="/society" element={<Society />} />
        <Route path="/studentBranches" element={<Student />} />
        <Route path="/Academic" element={<Academic />} />
        <Route path="/members" element={<Members />} />
        <Route path="/slate" element={<Slate />} />
        <Route path="/report" element={<Report />} />
        <Route path="/studentActivity" element={<Activity />} />
        <Route path="/socialEvents" element={<Social/>}/>
        <Route path="/techEvents" element={<Tech/>}/>
        <Route path="/mission" element={<Mission/>}/>
        <Route path="/pride" element={<Pride/>}/>
        <Route path="/pride/awards" element={<Awards/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
