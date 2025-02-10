import { LogOut, X } from "lucide-react";
import { FieldNav } from './Links/NavLinks';
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import PropTypes from "prop-types";
import Logo from '../../../public/logo.png'

const MobileNav = ({ isNav, setIsNav }: { isNav: boolean; setIsNav: (value: boolean) => void }) => {
  const location = useLocation(); 

  return (
    <motion.section onClick={() => setIsNav(false)} className="fixed h-full lg:hidden w-full bg-black flex justify-between bg-opacity-20 z-20"
      initial={{x: -2000}}
      animate={isNav ? {x: 0}: {x: -2000}}
      transition={{duration: .5}}
    >
    <div className="p-2 h-full w-6/12 bg-[#13802AFF]">
      <div className="w-full flex items-center justify-center">
        <img src={Logo} className="w-16" alt="Logo" />
      </div>
      <section className="py-10 leading-10 w-full grid space-y-2">
        {FieldNav.map((nav, index) => (
          <Link
            key={index}
            to={nav.link}
            className={`w-full bg-opacity-20 p-2 rounded-md hover:bg-opacity-30 px-6 flex items-center gap-2 ${
              location.pathname === nav.link ? "bg-green-500" : "bg-transparent"
            }`}
          >
            {nav.icon} {nav.name}
          </Link>
        ))}
      </section>
      <div className="pt-20">
        <Link to="/login" className="w-full p-2 px-6 flex items-center gap-2">
          <LogOut /> LogOut
        </Link>
      </div>
    </div>
    <X onClick={() =>setIsNav(false) } className="m-4 mt-6"/>
    </motion.section>
  );
};

MobileNav.propTypes = {
  isNav: PropTypes.bool.isRequired,
  setIsNav: PropTypes.bool.isRequired,
}

export default MobileNav;