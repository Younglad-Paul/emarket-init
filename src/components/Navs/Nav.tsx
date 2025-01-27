import { useState, useEffect } from 'react';
import logo from '../../public/logo.png';

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
        <div className="flex gap-10">
          <a href="#" className="hover:text-yellow-500 bg-green-900 bg-opacity-60 p-2 rounded-md">
            About
          </a>
          <a href="#" className="hover:text-yellow-500 bg-green-900 bg-opacity-60 p-2 rounded-md">
            FAQ
          </a>
          <a href="#" className="hover:text-yellow-500 bg-green-900 bg-opacity-60 p-2 rounded-md">
            Search
          </a>
          <a href="#" className="hover:text-yellow-500 bg-green-900 bg-opacity-60 p-2 rounded-md">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
