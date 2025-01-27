import { FaIdCard } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";

export default function Action() {

    const Cards = [
        {
            image: <FaIdCard className="w-48 h-40" />,
            text: 'Register'
        },
        {
            image: <RiUserSearchFill className="w-48 h-40" />,
            text: 'Search'
        },
        {
            image: <RiVerifiedBadgeFill className="w-48 h-40" />,
            text: 'Verify'
        },
        {
            image: <MdPayments className="w-48 h-40" />,
            text: 'Pay Tax'
        },
    ]

    return (
        <div className="p-8">
            <div className="grid grid-cols-2 gap-8">
                {Cards.map((card, index) => (
                    <div key={index} className="p-4 border-4 border-yellow-500 hover:border-green-900 bg-green-900 rounded-lg hover:bg-green-50 transition text-white hover:text-green-900">
                        <div className="flex flex-col items-center justify-center space-y-4 border-4 border-green-500 border-dotted p-8 px-12">
                            {card.image}
                            <p className="text-xl font-semibold text-center">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
