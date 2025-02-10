import agent from '../../../public/Peter-Mbah.webp';

export default function About() {
    return (
        <div className="w-full lg:py-10 text-black text-justify">
            <div className="container p-4 space-y-10">
                <section className="w-full grid grid-cols-1 space-y-3 items-center">
                    <div className="space-y-6">
                    <h2 className="text-xl lg:text-3xl font-extrabold text-green-900 mb-8">About Enugu North eMarket</h2>
                        <p className="lg:leading-relaxed">
                            Enugu eMarket is a dedicated platform designed to empower marketers in Enugu by providing seamless registration, valuable insights, and a community-driven network. Our mission is to foster innovation, collaboration, and data-driven decision-making within the marketing industry.
                        </p>
                        <p className="leading-relaxed">
                            Enugu eMarket is dedicated to supporting the local economy by providing a comprehensive and reliable census database for marketers. This empowers informed decision-making and strategic planning for business growth and development. Our platform ensures that every marketer, regardless of experience, has the tools and resources needed to thrive.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full bg-gray-300 w-full h-60 lg:h-96 rounded-md overflow-hidden">
                            <img src={agent} alt="Agent" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
