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