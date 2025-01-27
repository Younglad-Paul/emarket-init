import stat from '../../../public/landing5.jpg'
const Stat = () => {

    return (
        <div className="w-full flex items-center justify-center p-10 py-10 bg-green-900 text-white">
            <div className='space-y-10 container p-4'>
                <section className='w-full grid grid-cols-2 gap-10 items-center'>
                    <div className="space-y-4 ">
                    <h2 className="text-3xl font-bold">Connected Marketplaces</h2>
                        <p className="text-lg leading-relaxed">
                        By bridging the gap between businesses and authorities, we ensure fair tax compliance and enable better resource allocation for the development of our communities.
                        </p>
                        <div className="flex text-2xl">
                            <p><span className="text-green-500">10,452+</span> businesses registered across <span className="text-green-500">27</span> local markets</p>
                        </div>
                        <button className="p-3 px-6 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-200 transition">Register Now</button>
                    </div>
                    <div>
                        <img src={stat} className='rounded-md'/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Stat