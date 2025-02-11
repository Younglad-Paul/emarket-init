import { motion } from "framer-motion";
import agent from "../../../public/friendly.jpg";

const Locate = () => {
  return (
    <div className="w-full flex items-center justify-center py-8 lg:py-16 bg-[#13802AFF] text-white">
      <div className="container p-4 space-y-10">
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="flex justify-center">
            <div className="w-full bg-gray-300 rounded-md overflow-hidden">
              <img src={agent} alt="Agent" className="w-full h-full object-cover" />
            </div>
          </div>
          <motion.div 
            className="space-y-6 order-first lg:order-last"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl lg:text-3xl font-bold">Locate a Field Agent Near You</h2>
            <p className="leading-relaxed">
              Field agent stands are strategically placed across Enugu's markets, ensuring that all business owners have direct access to registration assistance. Our agents are committed to ensuring that your business is properly registered and verified in the system.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-semibold">How It Works</h3>
              <ul className="space-y-3 list-disc pl-6">
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <strong>Search Your Market:</strong> Use the search tool on our website to find your local field agent. Enter your market name or select from a list of available markets.
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <strong>Visit the Stand:</strong> Go to the specified location in your market. Look for our field agent's stand to meet with an agent in person.
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <strong>Get Verified:</strong> Your business details will be reviewed and verified by the field agent. They will guide you through the registration process and ensure your information is correctly entered into the system.
                </motion.li>
              </ul>
            </div>
            <motion.button 
              className="p-3 px-6 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-200 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Search Now
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Locate;
