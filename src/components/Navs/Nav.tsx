import { useState, useEffect } from 'react';
import logo from '../../public/logo.png';
import { Headset, Home, LogIn, Menu, MessageCircleMore, SearchCheck, User } from 'lucide-react';

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='h-[70px]'>
      <div
        className={`bg-[#13802AFF] w-full text-white  z-10 transition-all ${scrolling ? 'fixed' : 'relative'
          }`}
      >
        <div className="container p-2 flex items-center justify-between">
          <img src={logo} alt="Logo" className="w-16" />
          <div className="hidden lg:flex items-center gap-10 p-2 px-6 rounded-md">
            <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
              Home
            </a>
            <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
              About
            </a>
            <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
              FAQ
            </a>
            <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
              Search
            </a>
            <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
              Contact us
            </a>
            <a href="/login" className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-400 p-2 px-4 text-green rounded-lg">
              <LogIn />
              Login
            </a>
          </div>
            <Menu className='flex lg:hidden' />
        </div>
      </div>
    </div>
  );
}
