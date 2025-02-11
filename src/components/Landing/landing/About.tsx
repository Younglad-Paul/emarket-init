import { Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import agent from '../../../public/Peter-Mbah.webp';

export default function About() {
    return (
        <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-[300px] relative overflow-hidden">
                <img 
                    src={agent} 
                    alt="Enugu Market" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-4">
                    Explore Enugu
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                    Enugu eMarket is a dedicated platform designed to empower marketers 
                    in Enugu by providing seamless registration, valuable insights, and 
                    a community-driven network.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                    Our mission is to foster innovation and support the local economy 
                    through a comprehensive and reliable census database for marketers.
                </p>
                <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    Our History
                </button>
            </div>
        </div>
    );
}
