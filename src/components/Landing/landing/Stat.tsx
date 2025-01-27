import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import stat from '../../../public/landing5.jpg';
import stat2 from '../../../public/landing1.jpg';
import stat3 from '../../../public/landing4.jpg';

const Stat = () => {
    const Gallery = [
        {
            image: stat,
            name: 'market 1',
        },
        {
            image: stat2,
            name: 'market 2',
        },
        {
            image: stat3,
            name: 'market 2',
        },
    ];

    return (
        <div className="w-full flex items-center justify-center p-10 py-10 bg-green-900 text-white">
            <div className="space-y-10 container p-4">
                <section className="w-full grid grid-cols-2 gap-10 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Connecting Marketplaces</h2>
                        <p className="text-lg leading-relaxed">
                            By bridging the gap between businesses and authorities, we ensure fair tax compliance and enable better resource allocation for the development of our communities.
                        </p>
                        <div className="flex text-2xl">
                            <p>
                                <span className="text-green-500">10,452+</span> businesses registered across{' '}
                                <span className="text-green-500">27</span> local markets
                            </p>
                        </div>
                        <button className="p-3 px-6 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-200 transition">
                            Register Now
                        </button>
                    </div>
                    <div>
                        <Swiper
                            modules={[Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                        >
                            {Gallery.map((gallery, index) => (
                                <SwiperSlide key={index}>
                                    <img src={gallery.image} className="rounded-md w-full h-full" alt={gallery.name} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Stat;
