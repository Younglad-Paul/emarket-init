import agent from '../../../public/landing4.jpg'; 

export default function About() {
    return (
        <div className="w-full flex items-center justify-center py-16 bg-[#13802AFF]  text-white text-justify">
            <div className="container p-4 space-y-10">
                <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-xl lg:text-3xl font-bold">About Enugu North eMarket</h2>
                        <p className="leading-relaxed">
                            Enugu eMarket is a dedicated platform designed to empower marketers in Enugu by providing seamless registration, valuable insights, and a community-driven network. Our mission is to foster innovation, collaboration, and data-driven decision-making within the marketing industry.
                        </p>
                        <p className="leading-relaxed">
                            Enugu eMarket is dedicated to supporting the local economy by providing a comprehensive and reliable census database for marketers. This empowers informed decision-making and strategic planning for business growth and development. Our platform ensures that every marketer, regardless of experience, has the tools and resources needed to thrive.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full bg-gray-300 rounded-md overflow-hidden">
                            <img src={agent} alt="Agent" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
