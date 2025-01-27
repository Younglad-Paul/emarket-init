import { Menu, User } from "lucide-react";

interface HeaderProps {
  isNav: boolean;
  setIsNav: (value: boolean) => void;
}

const Header = ({ isNav, setIsNav }: HeaderProps) => {
  return (
    <div className="w-full h-full flex items-center justify-between lg:justify-end px-4 lg:px-10 gap-2">
      <div className="flex lg:hidden">
        <img src="/logo.png" className="w-16" alt="Logo" />
      </div>
      <div className="flex items-center gap-2">
        <div className="border rounded-full">
          <User size={30} />
        </div>
        <p className="hidden lg:flex">User Name</p>
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