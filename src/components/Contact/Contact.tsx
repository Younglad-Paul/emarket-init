import Image from "../../public/landing1.jpg"

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <header className="w-full bg-[#13802AFF] text-white py-16 text-center rounded-2xl shadow-lg mb-28">
        <div className="container">
        <h1 className="text-4xl font-bold mb-4">Get in Touch with Us</h1>
        <p className="lg:text-lg max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to us and we’ll be happy to help!
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
            <button className="w-full bg-[#13802AFF] text-white py-3 rounded-lg font-bold hover:bg-[#0f7022]">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
