import { ChevronLeft, ChevronRight, Info, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../Comp/table";
import { useState } from "react";

const Owners = () => {
  const users = [
    {
      reg: "000442",
      name: "Mr. John Doe",
      address: "6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.",
      date: "11/12/2025",
    },
    {
      reg: "000443",
      name: "Mr. Alex Smith",
      address: "12 Aba Road, Enugu, Nigeria.",
      date: "15/01/2026",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(users.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full h-screen overflow-y-auto p-4 pb-40">
      <section className="w-full space-y-4">
        {/* Header Section */}
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg md:text-3xl font-semibold">Registered Owners</h1>
          <Link
            to="/dashboard/form"
            className="bg-[#13802A] hover:bg-green-800 px-2 py-1 md:p-2 text-white flex items-center justify-center rounded-md gap-2 text-xs md:text-sm"
          >
            <Plus size={16} />
            Register Owner
          </Link>
        </div>

        {/* Table Wrapper for Horizontal Scrolling */}
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

export default Owners;
