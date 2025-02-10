import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

type NewForm = {
    id: number;
    name: string;
    type: string;
    email: string;
    hotline1: string;
    hotline2: string;
    address: string;
    town: string;
    lga: string;
};

const Form = () => {
    const [bussiness, setBusinessForm] = useState<NewForm[]>([
        {
            id: 1,
            name: "",
            type: "",
            email: "",
            hotline1: "",
            hotline2: "",
            address: "",
            town: "",
            lga: "",
        }
    ]);
    

    const handleAddBussiness = () => {
        const newBusiness: NewForm = {
            id: bussiness.length + 1,
            name: "",
            type: "",
            email: "",
            hotline1: "",
            hotline2: "",
            address: "",
            town: "",
            lga: "",
        };
        setBusinessForm([...bussiness, newBusiness]);
    };

    // console.log("business: ", bussiness)

    const handleRemoveBussiness = (id: number) => {
        // console.log("id: ", id);
        setBusinessForm(bussiness.filter((business) => business.id !== id));
    };

    const handleInputChange = (
        id: number,
        field: keyof NewForm,
        value: string
    ) => {
        setBusinessForm((prev) =>
            prev.map((business) =>
                business.id === id ? { ...business, [field]: value } : business
            )
        );
    };
    const route = useNavigate()

    const handleSubmit = () => {
        route("/dashboard/card")
    }

    return (
        <form onSubmit={handleSubmit} className="w-full h-screen overflow-y-scroll p-4 pb-20">
            <section className="w-full">
                <div className="w-full py-4 border-b flex items-center justify-between">
                    <h1 className="text-3xl">Registeration Form</h1>
                </div>
                <div className="w-full p-4 border-b">
                    <h2 className="text-xl italic">Personal Information</h2>
                    <div>
                        <section className="md:flex gap-4">
                            <div className="md::w-4/12 py-2 grid">
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
                        <section className="md:flex gap-4">
                            <div className="md:w-4/12 py-2 grid">
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
                        <section className="lmd:flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Address:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Town:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> LGA:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>

                        <section className="md:flex gap-4">
                            <div className="md:w-4/12 py-2 grid">
                                <label htmlFor="name"> Means of Identification:</label>
                                <select className="w-full border border-black p-2 rounded-md">
                                    <option value={'mr.'}>National Identification Number</option>
                                    <option value={'mr.'}>Driver&apos;s Licence</option>
                                    <option value={'mr.'}>Voter&apos;s Card</option>
                                    <option value={'mr.'}>Passport</option>
                                </select>
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Identification Number <span className="text-red-800">*</span>:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>

                    </div>
                </div>

                <div>
                    {bussiness.map((business, index) => (
                        <div key={business.id} className="w-full p-4 border-b">
                            <h2 className="text-xl italic">Business Information {index + 1}</h2>
                            <div>
                                <div className="md:w-6/12 py-2 lg:pr-4 grid">
                                    <label>
                                        Business Name <span className="text-red-800">*</span>:
                                    </label>
                                    <input
                                        type="text"
                                        value={business.name}
                                        onChange={(e) =>
                                            handleInputChange(business.id, "name", e.target.value)
                                        }
                                        className="w-full border border-black p-2 rounded-md"
                                    />
                                </div>
                                <section className="lg:flex gap-4">
                                    <div className="w-full py-2 grid">
                                        <label>Business Type</label>
                                        <input
                                            type="text"
                                            value={business.type}
                                            onChange={(e) =>
                                                handleInputChange(business.id, "type", e.target.value)
                                            }
                                            className="w-full border border-black p-2 rounded-md"
                                        />
                                    </div>
                                    <div className="w-full py-2 grid">
                                        <label>Business Email Address:</label>
                                        <input
                                            type="text"
                                            value={business.email}
                                            onChange={(e) =>
                                                handleInputChange(business.id, "email", e.target.value)
                                            }
                                            className="w-full border border-black p-2 rounded-md"
                                        />
                                    </div>
                                </section>
                                <section className="md:flex gap-4">
                                    <div className="w-full py-2 grid">
                                        <label>Hot Line 1</label>
                                        <input
                                            type="text"
                                            value={business.hotline1}
                                            onChange={(e) =>
                                                handleInputChange(business.id, "hotline1", e.target.value)
                                            }
                                            className="w-full border border-black p-2 rounded-md"
                                        />
                                    </div>
                                    <div className="w-full py-2 grid">
                                        <label>Hot Line 2:</label>
                                        <input
                                            type="text"
                                            value={business.hotline2}
                                            onChange={(e) =>
                                                handleInputChange(business.id, "hotline2", e.target.value)
                                            }
                                            className="w-full border border-black p-2 rounded-md"
                                        />
                                    </div>
                                </section>
                                <section className="w-full py-2 grid">
                                    <label>Business Address:</label>
                                    <input
                                        type="text"
                                        value={business.address}
                                        onChange={(e) =>
                                            handleInputChange(business.id, "address", e.target.value)
                                        }
                                        className="w-full border border-black p-2 rounded-md"
                                    />
                                </section>
                                <section className="md:flex gap-4">
                                    <div className="w-full py-2 grid">
                                        <label>Town:</label>
                                        <input
                                            type="text"
                                            value={business.town}
                                            onChange={(e) =>
                                                handleInputChange(business.id, "town", e.target.value)
                                            }
                                            className="w-full border border-black p-2 rounded-md"
                                        />
                                    </div>
                                    <div className="w-full py-2 grid">
                                        <label>L.G.A:</label>
                                        <input
                                            type="text"
                                            value={business.lga}
                                            onChange={(e) =>
                                                handleInputChange(business.id, "lga", e.target.value)
                                            }
                                            className="w-full border border-black p-2 rounded-md"
                                        />
                                    </div>
                                </section>
                            </div>
                            <button
                                onClick={() => handleRemoveBussiness(business.id)}
                                className="mt-2 p-2 bg-red-500 text-white rounded-md"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <div className="w-full justify-end flex my-4">
                    <div onClick={handleAddBussiness} className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer"><Plus /> Add New Business</div>
                </div>
                <div className="w-full p-4">
                    <h2 className="text-xl italic">Next of Kin Information</h2>
                    <div>
                        <section className="md:flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Name Of Next Kin:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Relationship:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        <section className="md:flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Phone Number:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Email Address:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                        </section>
                        <section className="md:flex gap-4">
                            <div className="w-full py-2 grid">
                                <label htmlFor="name">Address:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>
                            <div className="w-full py-2 grid">
                                <label htmlFor="name"> Town:</label>
                                <input type="text" className="w-full border border-black p-2 rounded-md" />
                            </div>

                        </section>
                        <section className="md:flex gap-4">
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
            <div className="w-full flex justify-end my-10">
                <button type="submit" className="bg-[#13802A] hover:bg-green-800 p-2 rounded-md text-white flex items-center justify-center gap-2">
                    <Check />Register
                </button>
            </div>
        </form>
    );
}

export default Form