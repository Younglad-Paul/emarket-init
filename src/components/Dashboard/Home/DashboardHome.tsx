import { Info, MapPinned, Plus, Search, SquareUser, Store } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SVG from '../../../public/lines.png'

interface CardData {
  name: string;
  icon: JSX.Element;
  stat: number;
  color: string;
}

interface UserData {
  reg: string;
  name: string;
  address: string;
  date: string;
}

interface CounterProps {
  stat: number;
}

const DashboardHome = () => {
  const Cards: CardData[] = [
    {
      name: "Market",
      icon: <MapPinned size={30} />,
      stat: 50,
      color: "bg-green-900",
    },
    {
      name: "Store",
      icon: <Store size={30} />,
      stat: 120,
      color: "bg-blue-700",
    },
    {
      name: "Store Owners",
      icon: <SquareUser size={30} />,
      stat: 75,
      color: "bg-purple-700",
    },
  ];

  const Counter = ({ stat }: CounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 1000;
      const startTime = performance.now();

      const animateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const value = Math.round(progress * stat);

        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        }
      };

      requestAnimationFrame(animateCounter);
    }, [stat]);

    return <div className="text-5xl font-bold">{count}</div>;
  };

  const Users: UserData[] = [
    {
      reg: '000442',
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
  ];

  return (
    <div className="w-full h-screen overflow-y-scroll p-4 pb-20">
      <section className="grid lg:grid-cols-3 gap-4">
      {Cards.map((card, index) => (
          <motion.div
            key={index}
            className="rounded-lg"
            style={{ background: `url(${SVG})`, backgroundSize: "1000px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`${card.color} grid p-4 py-6 h-40 rounded-lg font-bold text-white border border-green-500 bg-opacity-90 text-md flex items-center`}>
              <div className="flex items-center gap-2 font-semibold">{card.icon} {card.name}</div>
              <Counter stat={card.stat} />
            </div>
          </motion.div>
        ))}
      </section>

      <section className="lg:w-full my-10 space-y-4">
        <div className="w-full lg:flex items-center justify-between space-y-4">
          <p className="text-xl lg:text-3xl">Registered Store Owners</p>
          <div className="flex gap-4 justify-end">
            <div className="flex items-center gap-2 border border-green-900 rounded-md bg-green-900 pr-2">
              <input type="text" placeholder="Search..." className="border border-green-900 p-2 rounded-md focus:outline-none" />
              <Search className="text-white cursor-pointer" />
            </div>
            <Link to="/form" className="bg-green-900 hover:bg-green-800 p-2 text-white flex items-center justify-center rounded-md">
              <Plus />
              <p className="hidden md:flex">Register Owner</p>
            </Link>
          </div>
        </div>
        <table className="w-full lg:table-auto overflow-hidden">
          <thead className="w-full">
            <tr className="w-full bg-green-900 text-center text-white flex items-center">
              <th className="py-4 lg:px-4 w-full">ID</th>
              <th className="py-2 lg:px-4 w-full">Name</th>
              <th className="py-2 lg:px-4 w-full">Address</th>
              <th className="py-2 lg:px-4 w-full">Date</th>
              <th className="py-2 lg:px-4 w-full">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {Users.map((user, index) => (
              <tr key={index} className="w-full border-b flex items-cemter text-center gap-2">
                <td className="lg:px-4 py-2 lg:w-full">{user.reg}</td>
                <td className="lg:px-4 py-2 lg:w-full">{user.name}</td>
                <td className="lg:px-4 py-2 w-full">{user.address}</td>
                <td className="lg:px-4 py-2 lg:w-full">{user.date}</td>
                <td className="lg:px-4 py-2 flex justify-center lg:w-full">
                  <button className="text-white bg-green-900 hover:bg-green-800 p-2 lg:px-4 rounded-lg flex items-center justify-center gap-2 h-10">
                    <Info size={15} /> More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DashboardHome;