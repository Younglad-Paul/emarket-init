import stat1 from '../../../public/landing5.jpg';
import stat2 from '../../../public/landing1.jpg';
import stat3 from '../../../public/landing4.jpg';
import { useState } from 'react';

interface NewsItem {
    id: string;
    image: string;
    title: string;
    type: string;
    slug: string;
    newsContent: string;
}

const News = () => {
    const [selectedNews, setSelectedNews] = useState('general')
    const NewsItems: NewsItem[] = [
        {
            id: '1a2b3c4d5e6',
            type: 'general',
            image: stat1,
            title: 'Tech Titans Soar: Earnings Report Sparks Market Rally',
            slug: 'tech-titans-soar',
            newsContent: 'The stock market saw a significant rise today as leading tech giants reported record-breaking earnings. With companies like Apple, Microsoft, and Google exceeding analysts’ expectations, investor confidence surged, driving a broad market rally. Experts attribute this growth to increased demand for cloud computing and AI technologies. Analysts predict that these trends will continue to shape the market for years to come.',
        },
        {
            id: '7f8g9h0i1j2',
            type: 'emarket',
            image: stat2,
            title: 'Fed’s Rate Cut Hint: Investors Hold Their Breath',
            slug: 'feds-rate-cut-hint',
            newsContent: 'The Federal Reserve signaled potential interest rate cuts, leaving investors on edge as they await further clarity. While some analysts view this as a much-needed stimulus to counter slowing economic growth, others worry about long-term inflationary risks. Market analysts suggest that the Fed’s next move could significantly impact borrowing costs and consumer spending trends across the nation.',
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



    const Modal = ['General', 'eMarket']

    return (
        <div className="">
            <div className="container">
                <section className="">
                    <div className="space-y-4">
                        <h2 className="text-xl lg:text-3xl font-extrabold text-green-900 text-center">Recent News</h2>
                        <div className='flex items-center justify-center'>
                            <div className='w-42 bg-gray-200 flex gap-2 justify-between rounded-full p-1 text-gray-700'>
                                {Modal.map((modal, index) => (
                                    <button key={index} onClick={() => setSelectedNews(modal.toLowerCase())} className={`p-1 px-2 text-sm rounded-full border cursor-pointer hover:bg-green-500 ${selectedNews === modal.toLowerCase() ? 'bg-[#13802AFF] text-white border-green-900 font-bold' : null }`}>{modal}</button>
                                ))}
                            </div>
                        </div>
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {NewsItems.map((news, index) => (
                                news.type.includes(selectedNews ) && (
                                    <div key={index} className="border border-green-500 rounded-lg shadow-sm overflow-hidden">
                                        <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-t-lg" />
                                        <h3 className="text-md font-bold mt-2 p-2">{news.title}</h3>
                                        <p className="text-sm text-justify text-gray-600 p-2">{news.newsContent.slice(0, 150)}...</p>
                                        <p className='bg-gray-400 text-sm rounded-full m-2 text-white p-1 px-2 w-16 '>{news.type}</p>
                                    </div>
                                )
                            ))}
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default News;
