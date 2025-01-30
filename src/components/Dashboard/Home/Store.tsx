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

const Store = () => {
  const Users = [
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
    {
      reg: '000442',
      store: "John Doe and Son Ltd",
      name: 'Mr. John Doe',
      address: '6 Niger Drive, GRA, Onitsha, Anambra State, Nigeria.',
      date: '11/12/2025'
    },
  ];

  return (
    <div className="w-full h-screen overflow-y-scroll p-4 pb-20">
      <section className="w-full space-y-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl lg:text-3xl">Registered Stores</h1>
          <Link to="/form" className="bg-[#13802A] hover:bg-green-800 p-2 text-white flex items-center justify-center rounded-md">
            <Plus />
            Register Owner
          </Link>
        </div>
        <Table className="w-full lg:table-auto overflow-hidden mt-5 rounded-md shadow-md">
          <TableHeader>
            <TableRow className="bg-[#13802A] text-white text-center">
              <TableHead className="py-4 lg:px-4 text-sm font-medium">ID</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Store</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Address</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Name</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Date</TableHead>
              <TableHead className="py-2 lg:px-4 text-sm font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Users.map((user, index) => (
              <TableRow key={index} className="border-b hover:bg-gray-100 transition-colors">
                <TableCell className="lg:px-4 py-2 text-sm">{user.reg}</TableCell>
                <TableCell className="lg:px-4 py-2 text-sm">{user.store}</TableCell>
                <TableCell className="lg:px-4 py-2 text-sm">{user.address}</TableCell>
                <TableCell className="lg:px-4 py-2 text-sm">{user.name}</TableCell>
                <TableCell className="lg:px-4 py-2 text-sm">{user.date}</TableCell>
                <TableCell className="lg:px-4 py-2 flex">
                  <button className="text-white bg-[#13802A] hover:bg-green-800 p-2 lg:px-4 rounded-lg flex items-center justify-center gap-2 h-10 text-sm">
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
          <p className="bg-[#13802A] p-2 text-white rounded-md text-sm">8</p>
          <p className="flex items-center hover:text-green-500 cursor-pointer text-sm">
            Next <ChevronRight />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Store;