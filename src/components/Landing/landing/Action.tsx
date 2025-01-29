import { motion } from "framer-motion";
import Verify from '../../../public/cert.svg';
import Seach from '../../../public/search.svg';
import Reg from '../../../public/certify.svg';
import Tax from '../../../public/register.svg';

export default function Action() {
    const Cards = [
        {
            image: <img src={Reg} className="w-40" alt="Register" />,
            text: "Register your Business",
            direction: { x: -100, y: 0 },
        },
        {
            image: <img src={Seach} className="w-40" alt="Register" />,
            text: "Search up Business",
            direction: { x: 100, y: 0 },
        },
        {
            image: <img src={Verify} className="w-40" alt="Register" />,
            text: "Business Verification",
            direction: { x: 0, y: -100 },
        },
        {
            image: <img src={Tax} className="w-40" alt="Tax Services" />,
            text: "Tax Services",
            direction: { x: 0, y: 100 },
        },
    ];

    return (
        <div className="container p-12 text-center text-md py-20">
            <h2 className="text-4xl font-extrabold text-green-900 text-center">Business</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
                Experience Enugu State’s online platform, facilitating efficient, transparent, 
                and responsive government services, enhancing public service delivery for businesses.
            </p>

            <div className="grid grid-cols-4 gap-8 justify-center">
                {Cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: card.direction.x, y: card.direction.y }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            type: "spring", 
                            stiffness: 150, 
                            damping: 12, 
                            delay: index * 0.2, 
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="p-2 text-green-500 hover:bg-green-100 transition-all">
                            <div className="flex flex-col items-center space-y-2 p-6">
                                {card.image}
                            </div>
                        </div>
                        <p className="text-sm font-medium text-gray-400">{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}