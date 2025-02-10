import { Plus, Printer } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NigerianIDCard = () => {
  const [showBack, setShowBack] = useState(false);

  return (
    <div className="p-4">
        <div className="flex items-center justify-end">
         <Link to="/form" className="bg-[#13802A] hover:bg-green-800 p-2 text-white flex items-center justify-center rounded-md gap-2">
            <Printer />
            <p className="hidden md:flex">Print</p>
        </Link>
        </div>
    <section className="flex lg:items-center lg:justify-center m-40 -mx-12 lg:my-20 ">
      <div
        className="w-[500px] h-[330px] bg-green-200 border border-gray-400 rounded-lg shadow-xl p-6 relative cursor-pointer rotate-90 lg:rotate-0"
        onClick={() => setShowBack(!showBack)}
      >
        {showBack ? (
          // Back of the Card
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-green-800 font-bold text-xl text-center">
            Enugu State Market Identity Card
            </h2>
            <p className="text-gray-700 text-sm text-center mt-2">For official verification purposes only</p>
            <div className="mt-4 w-full h-12 bg-gray-300 rounded-md"></div>
            <p className="text-sm text-gray-800 mt-2 text-center">If found, please return to the nearest police station.</p>
            <p className="text-xs text-gray-600 mt-1">© ESMIC Nigeria</p>
          </div>
        ) : (
          // Front of the Card
          <>
            <div className="text-green-800 font-bold text-xl text-center">
              FEDERAL REPUBLIC OF NIGERIA
            </div>
            <div className="text-gray-700 text-sm text-center">Enugu State Market Identity Card</div>

            <div className="absolute top-20 right-10 w-32 h-40 bg-gray-300 rounded-md border border-gray-400"></div>

            <div className="mt-4 text-gray-800 text-sm font-semibold">
              <p>SURNAME: <span className="font-normal">PROUD</span></p>
              <p>FIRST NAME: <span className="font-normal">NIGERIAN</span></p>
              <p>MIDDLE NAME: <span className="font-normal">CITIZEN</span></p>
              <p>DATE OF BIRTH: <span className="font-normal">01 OCT 60</span></p>
              <p>NATIONALITY: <span className="font-normal">NGA</span></p>
              <p>ISSUE DATE: <span className="font-normal">28 AUG 14</span></p>
              <p>SEX: <span className="font-normal">M</span> HEIGHT: <span className="font-normal">176cm</span></p>
            </div>

            <div className="mt-4 text-lg font-bold text-gray-800 tracking-wider text-center">
              7212 2678 4245 0618
            </div>

            <div className="flex justify-between items-center mt-4 text-xs text-gray-700">
              <span className="font-semibold">ESMIC</span>
              <span className="font-semibold">NGA</span>
              <span>EXPIRY: 08/19</span>
            </div>
          </>
        )}
      </div>
    </section>
    </div>
  );
};

export default NigerianIDCard;
