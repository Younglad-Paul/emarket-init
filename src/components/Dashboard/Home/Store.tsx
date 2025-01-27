import { ChevronLeft, ChevronRight, Info, Plus } from "lucide-react";
import { Link } from "react-router-dom";

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
          <Link to="/form" className="bg-green-900 hover:bg-green-800 p-2 text-white flex items-center justify-center rounded-md">
            <Plus />
            Register Owner
          </Link>
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
                <td className="lg:px-4 py-2 flex  justify-center lg:w-full">
                  <button className="text-white bg-green-900 hover:bg-green-800 p-2 lg:px-4 rounded-lg flex items-center justify-center gap-2 h-10">
                    <Info size={15} /> More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex items-center justify-end p-4 gap-4">
          <p className="flex items-center hover:text-green-500 cursor-pointer"><ChevronLeft /> Prev</p>
          <p className="bg-green-900 p-2 text-white rounded-md">20 of 50</p>
          <p className="flex items-center hover:text-green-500 cursor-pointer">Next <ChevronRight /></p>
        </div>
      </section>
    </div>
  );
}

export default Store;