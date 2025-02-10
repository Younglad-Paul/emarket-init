import { Route, Routes,
    //  Navigate 
    } from 'react-router-dom';
import Header from './Utility/Header';
import Nav from './Utility/Sidebar';
import Home from './Home/DashboardHome';
import Form from './Home/Form';
import Owners from './Home/Owners';
import Market from './Home/Market';
// import MobileNav from '@/Dashboard/Layout/MobileNav';
import { useState } from 'react';
import Store from './Home/Store';
import Profile from './Home/Profile';
import EditProfile from './Home/EditProfile';
import MobileNav from './Utility/MobileNav';
import NigerianIDCard from './Card/Card';

// const isAuthenticated = () => {
//   return localStorage.getItem('authToken') !== null;
// }

const DashbardLayout = () => {
    const [isActive, setIsActive] = useState(false)

    // //   if (!isAuthenticated()) {
// //     return <Navigate to="/login" />;
//   }

    return (
        <section className="text-start w-full h-screen flex fixed bg-gray-50">
          <div className="hidden lg:flex bg-[#13802A] text-white w-2/12">
            <Nav />
          </div>
    
          <main className="flex-grow">
            <div className="bg-[#13802A] text-white border-b h-20">
              <MobileNav isNav={isActive} setIsNav={setIsActive}  />
              <Header isNav={isActive} setIsNav={setIsActive} />
            </div>
    
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="form" element={<Form />} />
              <Route path="card" element={<NigerianIDCard />} />
              <Route path="market" element={<Market />} />
              <Route path="registered-users" element={<Owners />} />
              <Route path="store" element={<Store />} />
              <Route path="profile" element={<Profile />} />
              <Route path="edit-profile" element={<EditProfile />} />
            </Routes>
          </main>
        </section>
      );
}

export default DashbardLayout;
