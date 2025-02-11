import Hero from './landing/Hero'
import About from './landing/About'
import Action from './landing/Action'
import FAQ from './landing/FAQ'
import Stat from './landing/Stat'
import Locate from './landing/Locate'
import Assistance from './landing/Assistance'
import News from './landing/News'
// import Signup from './landing/SignUp'

const Landing = () => {
  return (
    <div className='bg-gray-50 text-sm lg:text-lg'>
      <Hero />
      <Action />
      <div className='container mx-auto py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-4'>
          <About />
          <Stat />
        </div>
      </div>
      <Locate />
      <div className='lg:p-10 container grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
        <FAQ />
        <News />
      </div>
      <Assistance />
      {/* <Signup /> */}
    </div>
  )
}

export default Landing;
