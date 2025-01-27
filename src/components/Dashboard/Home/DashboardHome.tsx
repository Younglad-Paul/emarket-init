import { ChevronLeft, ChevronRight, Info, MapPinned, Plus, Search, SquareUser, Store } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SVG from '../../../public/lines.png'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../Comp/table"; 

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
        <Table className="w-full lg:table-auto overflow-hidden mt-5 rounded-md shadow-md">
          <TableHeader>
            <TableRow className="bg-green-900 text-white text-center">
              <TableHead className="py-4 lg:px-4 text-sm font-medium">ID</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Name</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Address</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Date</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Users.map((user, index) => (
              <TableRow key={index} className="border-b hover:bg-gray-100 transition-colors">
                <TableCell className="lg:px-4 py-2 text-sm">{user.reg}</TableCell>
                <TableCell className="lg:px-4 py-2 text-sm">{user.name}</TableCell>
                <TableCell className="lg:px-4 py-2 text-sm">{user.address}</TableCell>
                <TableCell className="lg:px-4 py-2 text-sm">{user.date}</TableCell>
                <TableCell className="lg:px-4 py-2 flex">
                  <button className="text-white bg-green-900 hover:bg-green-800 p-2 lg:px-4 rounded-lg flex items-center justify-center gap-2 h-10 text-sm">
                    <Info size={15} /> More
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="w-full flex items-center justify-end p-4 gap-4">
          <p className="flex items-center hover:text-green-500 cursor-pointer text-sm">
            <ChevronLeft /> Prev
          </p>
          <p className="bg-green-900 p-2 text-white rounded-md text-sm">8</p>
          <p className="flex items-center hover:text-green-500 cursor-pointer text-sm">
            Next <ChevronRight />
          </p>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;