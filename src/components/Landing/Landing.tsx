import Hero from './landing/Hero'
import About from './landing/About'
import Action from './landing/Action'
import FAQ from './landing/FAQ'
import Stat from './landing/Stat'
import Locate from './landing/Locate'
import Assistance from './landing/Assistance'

const Landing = () => {
  return (
    <div className='bg-gray-50'>
      <div className='h-[100vh]'>
        <Hero />
      </div>
      <div className='p-10 container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <About />
        <Action />
      </div>
      <Locate />
      <FAQ />
      <Stat />
      <Assistance />
    </div>
  )
}

export default Landing;
