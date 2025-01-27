import { useState, useEffect } from 'react';
import logo from '../../public/logo.png';
import { Headset, Home, LogIn, MessageCircleMore, SearchCheck, User } from 'lucide-react';
import { BsQuestion } from 'react-icons/bs';

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
    <div
      className={`fixed w-full text-white font-semibold p-2 z-10 transition-all ${
        scrolling ? 'bg-green-900' : 'bg-opacity-60'
      }`}
    >
      <div className="container flex items-center justify-between">
        <img src={logo} alt="Logo" className="w-28" />
        <div className="flex items-center gap-10 bg-green-900 bg-opacity-60 p-2 px-6 rounded-md">
        <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
        <Home />
            Home
          </a>
          <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
          <User />
            About
          </a>
          <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
          <MessageCircleMore />
            FAQ
          </a>
          <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
          <SearchCheck />
            Search
          </a>
          <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
          <Headset />
            Contact us
          </a>
        </div>
          <a href="/login" className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 p-2 px-4 text-green rounded-lg">
          <LogIn />
            Login
          </a>
      </div>
    </div>
  );
}
