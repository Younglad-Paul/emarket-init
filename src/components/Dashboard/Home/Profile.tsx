import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {

    return (
        <div className="w-full h-screen overflow-y-scroll p-4 pb-20">
            <section className="w-full">
                <div>
                <div className="w-full py-4 border-b flex items-center justify-between">
                    <h1 className="text-xl lg:text-3xl">Field Agent&apos;s Information</h1>
                    <Link to='/edit-profile'  className="bg-green-900 hover:bg-green-800 text-white p-2 rounded-md cursor-pointer">Edit Profile</Link>
                </div>
                </div>
                <div className="w-full p-4 border-b space-y-2">
                    <div className="lg:flex w-full gap-4">
                        <div className="lg:w-4/12 border flex items-center justify-center">
                            <User size={300} className="text-gray-300"/>
                        </div>
                    <div className="w-full">
                        <section className="flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Full Name:</label>
                                <input type="text" className="w-full border-b border-black p-2 focus:outline-none" disabled/>
                            </div>
                           
                        </section>
                        <section className="flex gap-4">
                            <div className="w-4/12 py-2 grid">
                                <label htmlFor="name"> Gender <span className="text-red-800">*</span>:</label>
                                <input type="text" className="w-full border-b border-black p-2 focus:outline-none" disabled/>
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Phone Number <span className="text-red-800">*</span>:</label>
                                <input type="text" className="w-full border-b border-black p-2" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Email Address:</label>
                                <input type="text" className="w-full border-b border-black p-2 focus:outline-none" disabled/>
                            </div>
                        </section>
                        <section className="flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Address:</label>
                                <input type="text" className="w-full border-b border-black p-2 focus:outline-none" disabled/>
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Town:</label>
                                <input type="text" className="w-full border-b border-black p-2 focus:outline-none" disabled/>
                            </div>
                        </section>
                        <section className="flex gap-4">
                        <div className="w-full py-2 grid">
                            <label htmlFor="name"> L.G.A:</label>
                            <input type="text" className="w-full border-b border-black p-2 focus:outline-none" disabled/>
                        </div>
                        </section>
                        <section className="flex gap-4">
                            <div className="w-4/12 py-2 grid">
                                <label htmlFor="name"> Means of Identification:</label>
                                <input type="text" className="w-full border-b border-black p-2 focus:outline-none" disabled/>

                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Identification Number:</label>
                                <input type="text" className="w-full border-b border-black p-2 focus:outline-none" disabled/>
                            </div>
                        </section>
                        
                    </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Profile