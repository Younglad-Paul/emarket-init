import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navs/Nav";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Navs/Footer";
import Login from "./components/Auth/Login";
import DashbardLayout from './components/Dashboard/DashboardLayout'

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
