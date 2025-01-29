import { FaIdCard } from "react-icons/fa";
import { RiUserSearchFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { ScrollText } from 'lucide-react';
import { motion } from "framer-motion";
import Verify from '../../../public/reg.png';
import Seach from '../../../public/search.png';
import Reg from '../../../public/icon1.png';
import Tax from '../../../public/tax.png';

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
            {/* <h1 className="text-4xl font-extrabold text-green-900 mb-4">Government</h1>
            <p className="text-lg text-green-500 max-w-2xl mx-auto mb-8">
                We Work for You! Get clear information, access services efficiently, and contribute to a better tomorrow.
            </p>

            <div className="grid grid-cols-2 gap-8 justify-center">
                <div className="p-6 border-2 border-green-400 text-green-500 hover:bg-green-100 transition-all">
                    <h2 className="text-2xl font-bold mb-4">Monitoria</h2>
                    <p className="text-sm">Local Government Authority</p>
                </div>
                <div className="p-6 border-2 border-green-400 text-green-500 hover:bg-green-100 transition-all">
                    <h2 className="text-2xl font-bold mb-4">Legislature</h2>
                    <p className="text-sm">Encyg Zibala Geographic Information System</p>
                    <p className="text-sm">Security Trust/Indi</p>
                </div>
            </div> */}

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
                        <p className="text-sm font-medium text-green-500 mt-2">{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}