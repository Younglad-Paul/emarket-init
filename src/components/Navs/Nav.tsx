import { useState, useEffect } from 'react';
import logo from '../../public/logo.png';
import { LogIn, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className='h-[60px]'>
      <div
        className={`bg-[#13802AFF] w-full text-white z-10 transition-all ${
          scrolling ? 'fixed' : 'relative'
        }`}
      >
        <div className="container p-2 flex items-center justify-between">
          <img src={logo} alt="Logo" className="w-16" />
          <div className="hidden lg:flex items-center gap-10 p-2 px-6 rounded-md">
            <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-500 flex items-center gap-2">
              About
            </a>
            <a href="/faq" className="hover:text-yellow-500 flex items-center gap-2">
              FAQ
            </a>
            <a href="/" className="hover:text-yellow-500 flex items-center gap-2">
              Search
            </a>
            <a href="/contact" className="hover:text-yellow-500 flex items-center gap-2">
              Contact us
            </a>
            <a href="/login" className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-400 p-2 px-4 text-green rounded-lg">
              <LogIn />
              Login
            </a>
          </div>
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className='flex lg:hidden'
          >
            <Menu />
          </button>
        </div>

        <motion.div 
          className={`fixed top-0 right-0 h-full w-8/12 bg-[#13802AFF] z-50 lg:hidden`}
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
              >
                <X />
              </button>
            </div>
            <div className="flex flex-col space-y-6 mt-8">
              <a href="/" className="hover:text-yellow-500 p-2">
                Home
              </a>
              <a href="/about" className="hover:text-yellow-500 p-2">
                About
              </a>
              <a href="/faq" className="hover:text-yellow-500 p-2">
                FAQ
              </a>
              <a href="/" className="hover:text-yellow-500 p-2">
                Search
              </a>
              <a href="/contact" className="hover:text-yellow-500 p-2">
                Contact us
              </a>
              <a 
                href="/login" 
                className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-400 p-2 px-4 text-white rounded-lg w-fit"
              >
                <LogIn />
                Login
              </a>
            </div>
          </div>
        </motion.div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
