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
      color: "bg-[#13802A]",
    },
    {
      name: "Store",
      icon: <Store size={30} />,
      stat: 120,
      color: "bg-[#13802A]",
    },
    {
      name: "Store Owners",
      icon: <SquareUser size={30} />,
      stat: 75,
      color: "bg-[#13802A]",
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

  const users: UserData[] = [
    {
      reg: '000442',
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full h-screen overflow-y-scroll p-4 pb-20">
      <section className="grid lg:grid-cols-3 gap-6">
        {Cards.map((card, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ background: `url(${SVG})`, backgroundSize: "" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`${card.color} grid p-10 h-48 rounded-xl font-bold text-white bg-opacity-90 backdrop-blur-sm border-2 border-opacity-20 border-white space-y-4`}
            >
              <div className="flex items-center gap-3 text-xl">
                <span className="text-3xl">{card.icon}</span>

                <span>{card.name}</span>
              </div>
              <div className="text-4xl font-bold mt-2">
                <Counter stat={card.stat} />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="lg:w-full my-10 space-y-4">
        <div className="w-full lg:flex items-center justify-between space-y-4">
          <p className="text-xl lg:text-3xl">Registered Store Owners</p>
          <div className="flex gap-4 justify-end">
            <div className="flex items-center gap-2 border border-green-900 rounded-md bg-[#13802A] pr-2">
              <input type="text" placeholder="Search..." className="border border-green-900 p-2 rounded-md focus:outline-none" />
              <Search className="text-white cursor-pointer" />
            </div>
            <Link to="/form" className="bg-[#13802A] hover:bg-green-800 p-2 text-white flex items-center justify-center rounded-md">
              <Plus />
              <p className="hidden md:flex">Register Owner</p>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full lg:table-auto overflow-hidden mt-5 rounded-md shadow-md">
            <TableHeader>
              <TableRow className="bg-[#13802A] text-white text-center">
                <TableHead className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium">ID</TableHead>
                <TableHead className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium">Name</TableHead>
                <TableHead className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium">Address</TableHead>
                <TableHead className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium">Date</TableHead>
                <TableHead className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedUsers.map((user, index) => (
                <TableRow
                  key={index}
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  <TableCell className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                    {user.reg}
                  </TableCell>
                  <TableCell className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                    {user.name}
                  </TableCell>
                  <TableCell className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                    {user.address}
                  </TableCell>
                  <TableCell className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                    {user.date}
                  </TableCell>
                  <TableCell className="px-2 py-1 md:px-4 md:py-2">
                    <div className="flex justify-center">
                      <button className="text-white bg-[#13802A] hover:bg-green-800 px-2 py-1 md:px-3 md:py-2 rounded-lg flex items-center gap-2 text-xs md:text-sm">
                        <Info size={14} /> More
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="w-full flex items-center justify-end p-4 gap-4">
          <button
            className={`flex items-center text-xs md:text-sm ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-green-500 cursor-pointer'}`}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={14} /> Prev
          </button>
          <p className="bg-[#13802A] px-2 py-1 md:px-3 md:py-1 text-white rounded-md text-xs md:text-sm">
            {currentPage} / {totalPages}
          </p>
          <button
            className={`flex items-center text-xs md:text-sm ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:text-green-500 cursor-pointer'}`}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;