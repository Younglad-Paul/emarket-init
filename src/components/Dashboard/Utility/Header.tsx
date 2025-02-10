import { Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import Logo from '../../../public/logo.png'
import { Link } from "react-router-dom";

interface HeaderProps {
  isNav: boolean;
  setIsNav: (value: boolean) => void;
}

const Header = ({ isNav, setIsNav }: HeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-between lg:justify-end px-4 lg:px-10 gap-2">
      <div className="flex lg:hidden">
        <img src={Logo} className="w-16" alt="Logo" />
      </div>
      <div className="flex items-center gap-2 relative">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="border rounded-full p-1">
            <User size={30} />
          </div>
          <p className="hidden lg:flex">User Name</p>
        </div>

        {showDropdown && (
          <Link to="/login" className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
            <button
              onClick={() => {
                setShowDropdown(false);

              }}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </Link>
        )}

        <div className="h-4 w-4 lg:hidden flex items-center">
          <Menu 
            onClick={() => setIsNav(true)} 
            className={!isNav ? "flex" : "hidden"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;