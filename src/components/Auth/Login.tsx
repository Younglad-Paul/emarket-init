import Image from '../../public/policy2.jpg'
import Logo from '../../public/logo.png'
import { useNavigate } from 'react-router-dom'
const Login = () => {
const navigate = useNavigate()
  const handleSubmit = ()=>{
    navigate('/dashboard')
  }

  return (
    <div className='h-screen  grid grid-cols-2'>
      <section className='' style={{ background: `url(${Image}) no-repeat`, backgroundSize: 'cover' }}>
      </section>
      <section className='p-10 flex items-center justify-center'>
        <div className="bg-gray-50 p-10">
          <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <div className="flex justify-center mb-6">
              <img src={Logo} alt="Enugu eMarket Logo" className="w-40" />
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold text-green-900">Login</h2>

              <section className='w-[30rem] py-10 space-y-4'>
              <div className='flex flex-col items-start w-full space-y-2'>
                  <label htmlFor='email'>Email:</label>
                  <input type='email' className='w-full border-2 p-2 border-green-900 rounded-lg focus:outline-none' />
                </div>
                <div className='flex flex-col items-start w-full space-y-2'>
                  <label htmlFor='email' >Password:</label>
                  <input type='password' className='w-full border-2 p-2 border-green-900 rounded-lg focus:outline-none' />
                </div>
                <button onClick={handleSubmit} className='w-full p-2 text-center font-semibold my-4 bg-green-900 hover:bg-green-800 text-white rounded-lg'>Password</button>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Login;
