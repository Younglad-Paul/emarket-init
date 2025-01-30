import { Send } from "lucide-react";

const Signup = () => {
  return (
    <div className='w-full' >
      <section className="w-full lg:p-24 flex items-center justify-center bg-white">
        <div className="lg:w-[1400px] lg:border lg:rounded-lg p-2 text-start lg:bg-[#13802AFF] text-black lg:text-white space-y-4">
          <div className=" h-full py-44 px-14 space-y-6" style={{background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1400' height='661' preserveAspectRatio='none' viewBox='0 0 1400 661'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1014%26quot%3b)' fill='none'%3e%3cpath d='M690.36 748.6C829.14 638.6 739.44 114.88 983.67 103.82 1227.89 92.76 1413.85 318.46 1570.28 321.95' stroke='rgba(3%2c 239%2c 9%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M631.21 663.03C725.46 650.87 681.76 446.88 935.45 435.16 1189.15 423.44 1382.37 220.29 1543.94 217.03' stroke='rgba(3%2c 239%2c 9%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M435.74 677.57C541.65 673.89 628.63 507.49 823.97 507.35 1019.32 507.21 1018.09 589.97 1212.21 589.98 1406.32 589.97 1501.21 507.81 1600.44 507.35' stroke='rgba(3%2c 239%2c 9%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M204.84 706.78C379.78 701.73 501.78 452.73 852.87 441.94 1203.95 431.15 1324.74 170.08 1500.89 164.32' stroke='rgba(3%2c 239%2c 9%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M486.51 747.9C646.07 721.02 686.02 357.6 980.18 329.3 1274.33 301 1337.66 103.59 1473.84 97.95' stroke='rgba(3%2c 239%2c 9%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1014'%3e%3crect width='1400' height='661' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`}}>
          <h1 className="font-bold text-xl">Stay Connected with Enugu eMarket</h1>
          <p className="lg:w-[500px]">Stay ahead in the ever-evolving market world by being the first to discover the latest trends, gain valuable insights, and uncover exciting opportunities tailored specifically for marketers in Enugu</p>
          <div className="border border-green-900 rounded-lg lg:w-[440px] h-12 my-2 flex overflow-hidden bg-yellow-500 hover:bg-yellow-600 items-center">
            <input type="email" className="w-10/12 h-full text-black p-2 focus:outline-none" />
            <Send size={25} className="w-2/12 text-white"/>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup;