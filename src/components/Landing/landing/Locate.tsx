import agent from '../../../public/landing4.jpg'
const Locate = () => {
    return (
      <div className="w-full flex items-center justify-center p-10 bg-green-900 text-white ">
        <div className="space-y-10 container p-4">
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
            {/* Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-full h-[30rem] bg-gray-300 text-gray-700 flex items-center justify-center text-lg border-2 border-dashed border-gray-400 rounded-md">
                <img src={agent} className='w-full h-full rounded-md'/>
              </div>
            </div>
  
            {/* Content Section */}
            <div className="space-y-6 ">
              <h2 className="text-3xl font-bold">Locate a Field Agent Near You</h2>
              <p className="text-lg leading-relaxed">
                Field agent stands are strategically placed across Enugu's markets, ensuring that all business owners have direct access to registration assistance. Our agents are committed to ensuring that your business is properly registered and verified in the system.
              </p>
  
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">How It Works</h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <strong>Search Your Market:</strong> Use the search tool on our website to find your local field agent. Enter your market name or select from a list of available markets.
                  </li>
                  <li>
                    <strong>Visit the Stand:</strong> Go to the specified location in your market. Look for our field agent's stand to meet with an agent in person. 
                  </li>
                  <li>
                    <strong>Get Verified:</strong> Your business details will be reviewed and verified by the field agent. They will guide you through the registration process and ensure your information is correctly entered into the system.
                  </li>
                </ul>
              </div>
              <button className="p-3 px-6 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-200 transition">
                Search Now
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Locate;
  