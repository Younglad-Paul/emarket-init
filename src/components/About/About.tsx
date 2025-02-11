import Image from "../../public/logo.png"
export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <header className="w-full bg-[#0a3413] text-white py-20 text-center  shadow-lg mb-4 lg:mb-28">
        <div className="container">
        <h1 className="text-4xl font-bold mb-4">Welcome to Enugu eMarket</h1>
        <p className="lg:text-lg max-w-2xl mx-auto">
          Empowering marketers in Enugu with seamless registration, valuable insights, and a thriving community network.
        </p>
        </div>
      </header>
      
      <section className="container flex flex-col md:flex-row items-center justify-between mt-16 max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <div className="w-full md:w-1/2">
          <img
            src={Image} 
            alt="Enugu eMarket Community"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        
        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Enugu eMarket is a dedicated platform designed to empower marketers in Enugu by providing seamless registration,
            valuable insights, and a community-driven network. Our mission is to foster innovation, collaboration, and
            data-driven decision-making within the marketing industry.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We believe in building a strong, informed marketing community where businesses and individuals can thrive through 
            shared knowledge and cutting-edge resources.
          </p>
        </div>
      </section>
    </div>
  );
}
