import { useEffect, useRef } from 'react';
import Background1 from '../../../public/landing1.jpg'
import Background2 from '../../../public/landing_default.jpg'
import Background3 from '../../../public/landing2a.jpg'
import Background4 from '../../../public/landing3.jpg'
import Background5 from '../../../public/landing4.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  const slideRef = useRef<HTMLDivElement | null>(null); 

  const slides = [
    { 
      img: Background2, 
      title: 'WELCOME TO ENUGU NORTH eMARKET' ,
      content: "Join an innovative network that powers marketing initiatives and contributes to the region's economic development through valuable census data.",
      button: 'Get Started',
      button_link: '#'
    },
    { 
      img: Background5, 
      title: 'WELCOME TO ENUGU NORTH eMARKET' ,
      content: "Join an innovative network that powers marketing initiatives and contributes to the region's economic development through valuable census data.",
      button: 'Search',
      button_link: '#'
    },
    { 
      img: Background3, 
      title: 'WELCOME TO ENUGU NORTH eMARKET' ,
      content: "Join an innovative network that powers marketing initiatives and contributes to the region's economic development through valuable census data.",
      button: 'Login',
      button_link: '/login'
    },
    { 
      img: Background4,  
      title: 'BECOME AN AGENT' ,
      content: "Join an innovative network that powers marketing initiatives and contributes to the region's economic development through valuable census data.",
      button: 'Learn More',
      button_link: '#'
    },
    { 
      img: Background1,
      title: 'WELCOME TO ENUGU NORTH eMARKET' ,
      content: "Join an innovative network that powers marketing initiatives and contributes to the region's economic development through valuable census data.",
      button: 'Pay Tax',
      button_link: '#'
    },
  ];

  const nextSlide = () => {
    if (slideRef.current) { 
      const items = document.querySelectorAll('.item');
      slideRef.current.appendChild(items[0]); 
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        {slides.map((slide, index) => (
          <div
            className="item"
            style={{ backgroundImage: `url(${slide.img})` }}
            key={index}
          >
            <div className="content bg-green-900 p-6  bg-opacity-80">
              <div className="name">{slide.title}</div>
              <div className="des">
                {slide.content}
              </div>
              <Link to={slide.button_link} className='bg-white font-semibold p-4 px-8 rounded-md  text-green-900'>{slide?.button}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;



// import { ArrowDown } from 'lucide-react'
// import background from '../../../public/landing_default.jpg'

// export default function Hero() {
//   return (
//     <section className='w-full h-screen text-white' 
//     style={{backgroundImage: url(${background}), backgroundRepeat: "no-repeat, no-repeat", backgroundSize: "cover"}}
//     >
//       <div className='w-full h-screen flex items-end bg-black bg-opacity-70'>
//         <div className='container flex'>
//         <div className='w-7/12 h-20vh mb-20'>
//         <div className='mt-16 space-y-4'>
//         <h1 className='uppercase text-5xl'>Welcome to Enugu North eMarket</h1>
//         <p>Become part of an innovative network, drive your marketing initiatives, and contribute to valuable census data for the region&apos;s economic growth.</p>
//         <button className='bg-white text-black font-bold text-xl p-4 rounded-lg '>Get Started</button>
//         </div>
//       </div>
//       <div className='flex items-end pb-20 justify-end  w-7/12'>
//         <ArrowDown />
//       </div>
//       </div>
//       </div>
//     </section>
//   )
// }