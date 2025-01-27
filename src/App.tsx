import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navs/Nav";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Navs/Footer";
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <section>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
