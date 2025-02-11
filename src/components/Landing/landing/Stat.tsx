import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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
            image: stat3,
            name: 'market 3',
        },
    ];

    return (
        <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-[300px] relative overflow-hidden">
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ 
                        delay: 5000, 
                        disableOnInteraction: false 
                    }}
                    loop={true}
                    className="w-full h-full"
                    style={{
                        '--swiper-pagination-color': '#16a34a',
                        '--swiper-pagination-bullet-inactive-color': '#999999',
                        '--swiper-pagination-bullet-inactive-opacity': '0.5',
                        '--swiper-pagination-bullet-size': '8px',
                        '--swiper-pagination-bullet-horizontal-gap': '6px'
                    } as React.CSSProperties}
                >
                    {Gallery.map((gallery, index) => (
                        <SwiperSlide key={index} className="w-full h-full">
                            <img 
                                src={gallery.image} 
                                alt={gallery.name} 
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-4">
                    Projects
                </h2>
                <div className="text-base text-gray-600 leading-relaxed mb-6">
                        <p>
                            By effectively bridging the gap between businesses and regulatory authorities, 
                            we ensure fair and transparent tax compliance, facilitate smoother communication and cooperation. 
                            This, in turn, enables better resource allocation, promoting sustainable growth and development within our communities, 
                            ultimately fostering a more prosperous and equitable society.
                        </p>
                    <div className="lg:flex items-center gap-2 mt-4">
                        <p>
                            <span className="text-xl font-semibold text-green-600">
                            <Counter stat={10452} duration={2000} />+ 
                            </span>
                            registered businesses in
                        </p>
                        <p>
                            <span className="text-xl font-semibold text-green-600">
                            <Counter stat={27} duration={1500} /> 
                            </span> 
                             local markets
                            </p>
                    </div>
                </div>
                <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    Projects
                </button>
            </div>
        </div>
    );
};

export default Stat;