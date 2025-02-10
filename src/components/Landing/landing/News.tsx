import { motion } from 'framer-motion';
import { useState } from 'react';
import stat1 from '../../../public/landing5.jpg';
import stat2 from '../../../public/landing1.jpg';
import stat3 from '../../../public/landing4.jpg';

interface NewsItem {
    id: string;
    image: string;
    title: string;
    type: string;
    slug: string;
    newsContent: string;
}

const News = () => {
    const [selectedNews, setSelectedNews] = useState('general');
    
    const NewsItems: NewsItem[] = [
        {
            id: '1a2b3c4d5e6',
            type: 'general',
            image: stat1,
            title: 'Tech Titans Soar: Earnings Report Sparks Market Rally',
            slug: 'tech-titans-soar',
            newsContent: 'The stock market saw a significant rise today as leading tech giants reported record-breaking earnings. With companies like Apple, Microsoft, and Google exceeding analysts expectations, investor confidence surged, driving a broad market rally. Experts attribute this growth to increased demand for cloud computing and AI technologies. Analysts predict that these trends will continue to shape the market for years to come.',
        },
        {
            id: '7f8g9h0i1j2',
            type: 'emarket',
            image: stat2,
            title: 'Feds Rate Cut Hint: Investors Hold Their Breath',
            slug: 'feds-rate-cut-hint',
            newsContent: 'The Federal Reserve signaled potential interest rate cuts, leaving investors on edge as they await further clarity. While some analysts view this as a much-needed stimulus to counter slowing economic growth, others worry about long-term inflationary risks. Market analysts suggest that the Feds next move could significantly impact borrowing costs and consumer spending trends across the nation.',
        },
        {
            id: '3k4l5m6n7o8',
            type: 'general',
            image: stat3,
            title: 'US-China Trade Deal: A New Era for Global Markets',
            slug: 'us-china-trade-deal',
            newsContent: 'A landmark trade agreement between the United States and China has brought optimism to global markets. The deal, which focuses on reducing tariffs and improving intellectual property protections, has been hailed as a step towards stabilizing international trade relations. Economists believe this could pave the way for sustained economic growth, especially in emerging markets that rely heavily on exports.',
        },
    ];

    const Modal = ['General', 'eMarket'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="py-16 bg-gray-50">
            <motion.div 
                className="container mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <section className="space-y-8">
                    <motion.div 
                        className="space-y-6"
                        variants={itemVariants}
                    >
                        <h2 className="text-xl lg:text-3xl font-extrabold text-green-900 text-center">
                            Recent News
                        </h2>
                        <div className="flex items-center justify-center">
                            <motion.div 
                                className="bg-gray-200 flex gap-3 justify-between rounded-full p-1.5 shadow-md"
                                variants={itemVariants}
                            >
                                {Modal.map((modal, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setSelectedNews(modal.toLowerCase())}
                                        className={`p-1.5 px-4 text-sm rounded-full transition-all duration-300 ease-in-out
                                            ${selectedNews === modal.toLowerCase() 
                                                ? 'bg-[#13802AFF] text-white font-bold shadow-lg' 
                                                : 'hover:bg-green-100 text-gray-700'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {modal}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.section 
                        className="grid grid-cols-1 md:grid-cols-2 gap-2"
                        variants={containerVariants}
                    >
                        {NewsItems.map((news, index) => (
                            news.type.includes(selectedNews) && (
                                <motion.div
                                    key={news.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-shadow duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.div
                                        className="relative h-48 overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img 
                                            src={news.image} 
                                            alt={news.title} 
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <div className="p-4 space-y-3">
                                        <h3 className="text-lg font-bold text-gray-900">{news.title}</h3>
                                        <p className="text-sm text-justify text-gray-600">
                                            {news.newsContent.slice(0, 150)}...
                                        </p>
                                        <span className="inline-block bg-green-100 text-green-800 text-sm rounded-full py-1 px-3 font-medium">
                                            {news.type}
                                        </span>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </motion.section>
                </section>
            </motion.div>
        </div>
    );
};

export default News;