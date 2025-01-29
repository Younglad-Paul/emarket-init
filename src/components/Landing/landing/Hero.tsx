import { motion } from 'framer-motion';
import Background1 from '../../../public/landing1.jpg';
import Background2 from '../../../public/landing_default.jpg';
import Background3 from '../../../public/landing2a.jpg';
import Background4 from '../../../public/landing3.jpg';
import Background5 from '../../../public/landing4.jpg';
import { ArrowDown } from 'lucide-react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Hero() {
  const slides = [
    {
      img: Background2,
      title: 'WELCOME TO ENUGU NORTH eMARKET',
      content:
        "Join an innovative network that powers marketing initiatives and contributes to the region's economic development through valuable census data.",
      button: 'Get Started',
      button_link: '#',
    },
    {
      img: Background3,
      title: 'EMPOWER LOCAL BUSINESSES',
      content:
        "Access tools and resources that help businesses thrive, creating a more vibrant and prosperous community for everyone.",
      button: 'Get Started',
      button_link: '#',
    },
    {
      img: Background4,
      title: 'BECOME AN AGENT',
      content:
        "Empower your community by joining a network of agents driving development and contributing to economic transformation.",
      button: 'Learn More',
      button_link: '#',
    },
    {
      img: Background1,
      title: 'SUPPORT LOCAL GOVERNANCE',
      content:
        "Participate in initiatives like tax payment and governance support, contributing to a thriving regional economy.",
      button: 'Pay Tax',
      button_link: '#',
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section className="w-full h-[80vh] text-white">
      <Swiper
        modules={[Pagination, A11y, Autoplay ]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className=""
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-[80vh]"
            style={{
              background: `url(${slide.img}) no-repeat center`,
              backgroundSize: 'cover',
            }}
          >
            <div className="w-full h-screen flex text-center items-center bg-black bg-opacity-70">
              <section className='container grid lg:grid-cols-2'>
              <div className=" flex flex-col items-center lg:items-start mb-20 space-y-6 lg:pr-40 p-4 ">
                <motion.h1
                  className="text-2xl lg:text-4xl font-bold uppercase text-[#13802AFF]"
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-md"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  {slide.content}
                </motion.p>
                <motion.a
                  href={slide.button_link}
                  className="bg-white text-black font-bold text-sm py-3 px-6 rounded-lg hover:bg-gray-200 transition"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  {slide.button}
                </motion.a>
              </div>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
