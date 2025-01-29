const Assistance = () => {
  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="container max-w-7xl text-center space-y-10 px-6">
        <h2 className="text-xl lg:text-3xl font-extrabold text-green-900">
          Need Assistance? We're Here to Help
        </h2>
        <p className="leading-relaxed text-gray-600 max-w-3xl mx-auto">
          Navigating the registration and tax process can be challenging, but we're here to make it easier. We are committed to providing the necessary resources and expert support to streamline the registration and tax processes, ensuring efficiency and clarity for all users.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Resource 1: Contact Us */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out space-y-6">
            <h3 className="text-xl font-semibold text-green-900">Contact Support</h3>
            <p className="text-gray-700">
              Have any questions? Our support team is here to assist you. Reach out for personalized help with your registration or any platform-related inquiries.
            </p>
            <button className="w-full py-3 px-6 bg-[#13802AFF] text-white font-semibold rounded-lg shadow-lg hover:bg-green-800 transition duration-200">
              Contact Support
            </button>
          </div>

          {/* Resource 2: Getting Started with Registration */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out space-y-6">
            <h3 className="text-xl font-semibold text-green-900">Getting Started with Registration</h3>
            <p className="text-gray-700">
              We’ve prepared a simple and easy-to-follow guide to help you get started with registering your business. Get connected with a field agent in no time!
            </p>
            <button className="w-full py-3 px-6 bg-[#13802AFF] text-white font-semibold rounded-lg shadow-lg hover:bg-green-800 transition duration-200">
              Start Registration Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
