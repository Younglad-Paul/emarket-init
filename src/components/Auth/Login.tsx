import Image from '../../public/policy2.jpg'
import Logo from '../../public/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/dashboard')
  }

  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      <section className='hidden lg:block' style={{ background: `url(${Image}) no-repeat`, backgroundSize: 'cover' }}>
      </section>

      <section className='p-4 lg:p-10 flex items-center justify-center bg-gray-50'>
        <div className="w-full max-w-md">
          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-8">
            <div className="flex justify-center mb-6 lg:hidden">
              <img src={Logo} alt="Enugu eMarket Logo" className="w-32 lg:w-40" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-semibold text-green-900 text-center">Login</h2>

              <form className='py-6 space-y-4' onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
                <div className='flex flex-col items-start w-full space-y-2'>
                  <label htmlFor='email' className='text-gray-700'>Email:</label>
                  <input 
                    type='email' 
                    id='email'
                    placeholder='Enter your email'
                    className='w-full border-2 p-2 border-green-900 rounded-lg focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700' 
                  />
                </div>

                <div className='flex flex-col items-start w-full space-y-2'>
                  <label htmlFor='password' className='text-gray-700'>Password:</label>
                  <input 
                    type='password' 
                    id='password'
                    placeholder='Enter your password'
                    className='w-full border-2 p-2 border-green-900 rounded-lg focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700' 
                  />
                </div>

                <div className='flex justify-between items-center text-sm pt-2'>
                  <label className='flex items-center'>
                    <input type='checkbox' className='mr-2' />
                    Remember me
                  </label>
                  <a href="#" className='text-green-700 hover:text-green-800'>Forgot Password?</a>
                </div>

                <button 
                  type='submit'
                  className='w-full p-3 text-center font-semibold bg-[#13802A] hover:bg-green-800 text-white rounded-lg transition-colors'
                >
                  Login
                </button>

                {/* <p className='text-center text-gray-600 text-sm pt-4'>
                  Don't have an account? 
                  <a href="/signup" className='text-green-700 hover:text-green-800 ml-1'>Sign up</a>
                </p> */}
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Login
