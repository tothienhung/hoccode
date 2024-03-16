import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center h-screen' >
      <div className='w-[350px]  rounded-lg 	'>
        <h1 className='my-4 ml-2 font-bold text-3xl'>Welcome  to back! </h1>
        <p className='ml-2 mt-1 text-[#6A727F] '> Please enter your credentials to sign in!</p>
        <div className="card">
          <div className='mt-5'>
            <h2 className='ml-2 mb-2 text-[#6A727F] font-bold '> User Name </h2>
            <input type="text" className='w-full px-4 py-2    ml-2 border rounded-lg' placeholder='Enter UserName' />
          </div>

          <div className='mt-5'>
            <h2 className='ml-2 mb-2  text-[#6A727F] font-bold' > Password </h2>
            <input type="text" className='w-full px-4 py-2 ml-2 border rounded-lg ' placeholder='Enter Password' />
          </div>
          <div className='mt-5 ml-2'>
            <input type="checkbox" id="myCheckbox" name="myCheckbox" value="isChecked" />
            <label className='ml-2 text-[#6A727F]' for="myCheckbox">Remember Me</label>
            <a href="quen-mat-khau.html" className='ml-20 text-[#4F47E5]'>Forgot Password</a>
          </div>
          <div className='   border rounded-lg px-4 py-2 color bg-[#4F47E5]  flex items-center justify-center mt-5 ml-2 bg-sky-600'><button className='text-white'> Sign In</button></div>
        </div>
        <div className='mt-5 mb-3'>
          <p className='ml-16  text-[#6A727F]'> Don't have an account yet?<a href="quen-mat-khau.html" className='ml-2 text-[#4F47E5]'>Sign up</a> </p>
        </div>
      </div>

    </div>
  )
}

export default App
