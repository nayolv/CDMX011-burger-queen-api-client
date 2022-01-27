import "../css/App.css";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Kitchen from "../pages/Kitchen";
import Ready from "../pages/Ready";
import Admin from "../pages/Admin";

function RoutesPath() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/breakfast" element={<Breakfast />} />
          <Route exact path="/lunch" element={<Lunch />} />
          <Route exact path="/kitchen" element={<Kitchen />} />
          <Route exact path="/ready" element={<Ready />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default RoutesPath;
