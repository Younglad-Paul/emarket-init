import Logo from '../../../public/logo.png';

export default function About() {
    return (
        <div className="bg-gray-50 p-4 border-4 border-green-900">
            <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="flex justify-center mb-6">
                    <img src={Logo} alt="Enugu eMarket Logo" className="w-40" />
                </div>

                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-semibold text-green-900">About Enugu North eMarket</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Enugu eMarket is a dedicated platform designed to empower marketers in Enugu by providing seamless registration, valuable insights, and a community-driven network. Our mission is to foster innovation, collaboration, and data-driven decision-making within the marketing industry.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
  Enugu eMarket is dedicated to supporting the local economy by providing a comprehensive and reliable census database for marketers. This empowers informed decision-making and strategic planning for business growth and development. Our platform ensures that every marketer, regardless of experience, has the tools and resources needed to thrive.
</p>

                </div>
            </section>
        </div>
    );
}
