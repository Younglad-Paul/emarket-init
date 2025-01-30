import { LogIn } from 'lucide-react'
import React from 'react'

const MobileNav = () => {
  return (
    <div>
      <section className='h-[100vh] bg-[#13802AFF] fixed z-10 w-6/12 text-white'>
          <div className="grid p-2 px-6 rounded-md">
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
          </section>
    </div>
  )
}

export default MobileNav
