import "./App.css";
import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import About from "./components/about/About";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}
