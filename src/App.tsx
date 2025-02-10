import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navs/Nav";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Navs/Footer";
import Login from "./components/Auth/Login";
import DashbardLayout from './components/Dashboard/DashboardLayout'
import AboutUs from "./components/About/About";
import ContactUs from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";

const App = () => {
  return (
    <BrowserRouter>
      
      <section>
        <Routes>
          <Route path="/" element={
          <>
          <Nav />
          <Landing />
          <Footer />
          </>
          } 
          />
          <Route path="/about" element={
          <>
          <Nav />
          <AboutUs />
          <Footer />
          </>
          } 
          />
          <Route path="/faq" element={
          <>
          <Nav />
          <FAQ />
          <Footer />
          </>
          } 
          />
          <Route path="/contact" element={
          <>
          <Nav />
          <ContactUs />
          <Footer />
          </>
          } 
          />
          <Route path="/login" element={
            <>
            <Nav />
            <Login />
            <Footer />
            </>
            } />
          <Route path="/dashboard/*" element={<DashbardLayout />} />
        </Routes>
      </section>
      
    </BrowserRouter>
  );
};

export default App;
