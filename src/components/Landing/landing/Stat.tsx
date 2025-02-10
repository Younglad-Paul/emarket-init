import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState, useRef } from 'react';

import stat1 from '../../../public/landing5.jpg';
import stat2 from '../../../public/landing1.jpg';
import stat3 from '../../../public/landing4.jpg';
import { TbBackground } from 'react-icons/tb';

interface GalleryItem {
    image: string;
    name: string;
}

interface CounterProps {
    stat: number;
    duration?: number;
}

const Counter = ({ stat, duration = 1000 }: CounterProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
    
        const currentRef = counterRef.current;
    
        if (currentRef) {
            observer.observe(currentRef);
        }
    
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isVisible]);
    

    useEffect(() => {
        if (!isVisible) return;

        const startTime = performance.now();

        const animateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const value = Math.round(progress * stat);

            setCount(value);

            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            }
        };

        requestAnimationFrame(animateCounter);
    }, [stat, duration, isVisible]);

    return <span ref={counterRef}>{count}</span>;
};

const Stat = () => {
    const Gallery: GalleryItem[] = [
        {
            image: stat1,
            name: 'market 1',
        },
        {
            image: stat2,
            name: 'market 2',
        },
        {
            image: stat3 ,
            name: 'market 3',
        },
    ];

    return (
        <div className="w-full py-10 text-black">
            <div className="space-y-10 container p-4">
                <section className="w-full grid grid-cols-1 items-center">
                    <div className="space-y-4 pb-4">
                    <h2 className="text-xl lg:text-3xl font-extrabold text-green-900 text-center mb-8">Connecting Marketplaces</h2>
                        <p className="leading-relaxed">
                        By effectively bridging the gap between businesses and regulatory authorities, we not only ensure fair and transparent tax compliance but also facilitate smoother communication and cooperation. This, in turn, enables better resource allocation, promoting sustainable growth and development within our communities, ultimately fostering a more prosperous and equitable society.
                        </p>
                        <div className="flex text-lg lg:text-xl">
                            <p>
                                <span className="text-green-500">
                                    <Counter stat={10452} duration={2000} />+
                                </span> businesses registered across{' '}
                                <span className="text-green-500">
                                    <Counter stat={27} duration={1500} />
                                </span> local markets
                            </p>
                        </div>
                        <button className="p-3 px-6 bg-[#13802AFF] text-white font-semibold rounded-lg hover:bg-green-900 transition">
                            Register Now
                        </button>
                    </div>
                    <div>
                        <Swiper
                            modules={[Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            className='rounded-md'
                        >
                            {Gallery.map((gallery, index) => (
                                <SwiperSlide key={index} className='w-full h-60 lg:h-96' style={{background: `url(${gallery.image}) no-repeat`, backgroundSize: 'cover'}} />
                                
                            ))}
                        </Swiper>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Stat;