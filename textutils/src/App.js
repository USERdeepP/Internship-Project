import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Download from "./components/Download";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter The Text To Analyze" />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
