import { FaIdCard } from "react-icons/fa";
import { RiUserSearchFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { motion } from "framer-motion";

export default function Action() {
    const Cards = [
        {
            image: <FaIdCard className="w-48 h-40" />,
            text: "Register",
            direction: { x: -100, y: 0 },
        },
        {
            image: <RiUserSearchFill className="w-48 h-40" />,
            text: "Search",
            direction: { x: 100, y: 0 },
        },
        {
            image: <RiVerifiedBadgeFill className="w-48 h-40" />,
            text: "Verify",
            direction: { x: 0, y: -100 },
        },
        {
            image: <MdPayments className="w-48 h-40" />,
            text: "Pay Tax",
            direction: { x: 0, y: 100 },
        },
    ];

    return (
        <div className="p-8">
            <div className="grid grid-cols-2 gap-8">
                {Cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="p-4 border-4 border-yellow-500 hover:border-green-900 bg-green-900 rounded-lg hover:bg-green-50 transition text-white hover:text-green-900"
                        initial={{ opacity: 0, x: card.direction.x, y: card.direction.y }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            type: "spring", 
                            stiffness: 150, 
                            damping: 12, 
                            delay: index * 0.3, 
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-center justify-center space-y-4 border-4 border-green-500 border-dotted p-8 px-12">
                            {card.image}
                            <p className="text-xl font-semibold text-center">{card.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
