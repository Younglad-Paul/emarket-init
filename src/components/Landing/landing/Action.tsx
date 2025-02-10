import { motion } from "framer-motion";
import { 
    Buildings, 
    MagnifyingGlass, 
    Certificate, 
    Receipt 
} from "@phosphor-icons/react";

export default function Action() {
    const Cards = [
        {
            image: <Buildings size={64} weight="duotone" className="text-green-600" />,
            text: "Register your Business",
            direction: { x: -100, y: 0 },
        },
        {
            image: <MagnifyingGlass size={64} weight="duotone" className="text-green-600" />,
            text: "Search up Business",
            direction: { x: 100, y: 0 },
        },
        {
            image: <Certificate size={64} weight="duotone" className="text-green-600" />,
            text: "Business Verification",
            direction: { x: 0, y: -100 },
        },
        {
            image: <Receipt size={64} weight="duotone" className="text-green-600" />,
            text: "Tax Services",
            direction: { x: 0, y: 100 },
        },
    ];

    return (
        <div className="container p-12 text-center text-lg py-20">
            <h2 className="text-4xl font-extrabold text-green-900 text-center">Business</h2>
            <p className="max-w-2xl mx-auto mb-8">
                Experience Enugu State&apos;s online platform, facilitating efficient, transparent, 
                and responsive government services, enhancing public service delivery for businesses.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 justify-center">
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
                        <div className="lg:p-2 text-green-500 hover:bg-green-100 transition-all">
                            <div className="flex flex-col items-center space-y-2 p-6">
                                {card.image}
                            </div>
                        </div>
                        <p className="hidden lg:block text-sm font-medium text-gray-400">{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}