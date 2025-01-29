import Hero from './landing/Hero'
import About from './landing/About'
import Action from './landing/Action'
import FAQ from './landing/FAQ'
import Stat from './landing/Stat'
import Locate from './landing/Locate'
import Assistance from './landing/Assistance'
import News from './landing/News'

const Landing = () => {
  return (
    <div className='bg-gray-50'>
        <Hero />
      {/* <div className='p-10 container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'> */}
        <Action />
        <About />
      {/* </div> */}
      <Locate />
      <div className='p-10 container grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <FAQ />
      <News />
      </div>
      <Stat />
      <Assistance />
    </div>
  )
}

export default Landing;
