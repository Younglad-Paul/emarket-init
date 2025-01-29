import logo from '../../public/logo.png'
export default function Footer
  () {
  return (
    <div className='w-full lg:h-[40svh] bg-[#13802AFF]' >
      <section className="w-full flex items-center justify-center">
        <div className="w-[1400px] p-2 text-start  text-white space-y-4 py-16 flex text-white">
                    <div className="container mx-auto px-4 w-full gap-10">
                        <div className=" grid md:grid-cols-5 gap-8">
                            <div className="">
                                <img src={logo} alt="logo" width={100} height={100} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">About Us</h3>
                                <ul className="space-y-2 text-sm ">
                                    <li>Our Mission</li>
                                    <li>Team</li>
                                    <li>Volunteer</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Support</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>FAQs</li>
                                    <li>Contact Us</li>
                                    <li>Help Center</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Useful Links</h3>
                                <ul className="space-y-2 text-sm ">
                                    <li>Get Involved</li>
                                    <li>Make a Donation</li>
                                    <li>Our Projects</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t mt-12 pt-6 flex justify-center items-center">
                            <p className="text-sm=">© Enugu North 2025</p>
                        </div>
                    </div>
        </div>
      </section>
    </div>
  )
}