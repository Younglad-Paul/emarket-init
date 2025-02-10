import { LogOut } from "lucide-react";
import { FieldNav } from './Links/NavLinks';
import { Link, useLocation } from "react-router-dom";
import Logo from '../../../public/logo.png'

const Sidebar = () => {
  const location = useLocation(); 

  return (
    <div className="hidden lg:block w-full p-2">
      <div className="w-full flex justify-center">
        <img src={Logo} className="w-20" alt="Logo" />
      </div>
      <section className="py-10 leading-10 w-full grid space-y-2">
        {FieldNav.map((nav: any, index: number) => (
          <Link
            key={index}
            to={nav.link}
            className={`w-full hover:bg-green-500 bg-opacity-20 p-2 rounded-md hover:bg-opacity-30 px-6 flex items-center gap-2 ${
              location.pathname === nav.link ? "bg-yellow-500 hover:bg-yellow-500" : "bg-transparent"
            }`}
          >
            {nav.icon} {nav.name}
          </Link>
        ))}
      </section>
      <div className="pt-40">
        <Link to="/login" className="w-full p-2 px-6 flex items-center gap-2">
          <LogOut /> LogOut
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;