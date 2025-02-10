import { Check, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function EditProfile() {

    return (
        <div className="w-full h-screen overflow-y-scroll p-4 pb-40">
            <section className="w-full">
            <div className="w-full py-4 border-b flex items-center justify-between">
                    <h1 className="text-3xl">Field Agent&apos;s Information</h1>
                    <Link to='/dashboard/profile'  className="bg-[#13802A] hover:bg-green-800 text-white p-2 rounded-md cursor-pointer flex gap-2"><Check /> Save</Link>
                </div>
                <div className="w-full p-4 border-b space-y-2">
                    <h2 className="text-xl italic">Personal Information</h2>
                    <div className="lg:flex w-full gap-4">
                        <div className="lg:w-4/12 border flex items-center justify-center cursor-pointer">
                            <User size={300} className="text-gray-300"/>
                        </div>
                    <div className="w-full">
                        <section className="lg:flex gap-4">
                            <div className="lg:w-4/12 py-2 grid">
                                <label htmlFor="name"> Title:</label>
                                <select className="w-full border border-black p-2 rounded-md">
                                    <option value={'mr.'}>Mr.</option>
                                    <option value={'mr.'}>Mrs.</option>
                                    <option value={'mr.'}>Miss.</option>
                                    <option value={'mr.'}>Dr.</option>
                                    <option value={'mr.'}>Prof.</option>
                                    <option value={'mr.'}>Barr.</option>
                                    <option value={'mr.'}>Chief.</option>
                                </select>
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> First Name <span className="text-red-800">*</span>:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Middle Name:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Last Name <span className="text-red-800">*</span>:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        <section className="lg:flex gap-4">
                            <div className="lg:w-4/12 py-2 grid">
                                <label htmlFor="name"> Gender <span className="text-red-800">*</span>:</label>
                                <select className="w-full border border-black p-2 rounded-md">
                                    <option value={'mr.'}>Male</option>
                                    <option value={'mr.'}>Female</option>
                                </select>
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Phone Number <span className="text-red-800">*</span>:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Email Address:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        <section className="lg:flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Address:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Town:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        <section className="lg:flex gap-4">
                        <div className="w-full py-2 grid">
                            <label htmlFor="name"> L.G.A:</label>
                            <input type="text" className="w-full border border-black p-2 rounded-md" />
                        </div>
                        <div className="w-full py-2 grid">
                            <label htmlFor="name"> State <span className="text-red-800">*</span>:</label>
                            <input type="text" value={'Enugu'} className="w-full border border-black p-2 rounded-md" />
                        </div>
                        <div className="w-full py-2 grid">
                            <label htmlFor="name"> Country <span className="text-red-800">*</span>:</label>
                            <input type="text" value={'Nigeria'} className="w-full border border-black p-2 rounded-md" />
                        </div>
                        </section>
                        <section className="flex gap-4">
                            <div className="w-4/12 py-2 grid">
                                <label htmlFor="name"> Means of Identification:</label>
                                <select className="w-full border border-black p-2 rounded-md">
                                    <option value={'mr.'}>National Identification Number</option>
                                    <option value={'mr.'}>Driver&apos;s Licence</option>
                                    <option value={'mr.'}>Voter&apos;s Card</option>
                                    <option value={'mr.'}>Passport</option>
                                </select>
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Identification Number:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        
                    </div>
                    </div>
                </div>

                <div className="w-full p-4">
                    <h2 className="text-xl italic">Next of Kin Information</h2>
                    <div>
                        <section className="lg:flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Name Of Next Kin:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Relationship:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        <section className="lg:flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Phone Number:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Email Address:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        <section className="lg:flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Address:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Town:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        <section className="lg:flex gap-4">
                        <div className="w-full py-2 grid">
                            <label htmlFor="name"> L.G.A:</label>
                            <input type="text" className="w-full border border-black p-2 rounded-md" />
                        </div>
                        <div className="w-full py-2 grid">
                            <label htmlFor="name"> State:</label>
                            <input type="text" className="w-full border border-black p-2 rounded-md" />
                        </div>
                        <div className="w-full py-2 grid">
                            <label htmlFor="name"> Country:</label>
                            <input type="text" className="w-full border border-black p-2 rounded-md" />
                        </div>
                        </section>
                        
                    </div>
                </div>

            </section>
        </div>
    );
}