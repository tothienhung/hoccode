
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from './schema/registerSchema';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
function Register() {
  const [loading, setLoading] = useState(false);
  const { register,
    handleSubmit,
    formState: { errors }, } = useForm({
      resolver: yupResolver(registerSchema),
    });

  const formSubmitHandler = async (params) => {
    try {
      setLoading(true);
      const { status, data } = await axios.post('https://dev-tuts-backend.vercel.app/auth/signup', params);
      setLoading(false); // stop
      if (status === 201) {
        console.log('response', data);

        // Xử lý phản hồi từ API tại đây
      }

    } catch (error) {
      console.error(error);
      setLoading(false); // stop
    }
  };
  console.log('loading', loading);
  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <div className='flex items-center justify-center h-screen bg-[#4070F4]' >
        <div className='w-[650px] h-[720px]  rounded-lg bg-white '>
          <div className='mx-4'>
            <h1 className='my-4 ml-2 text-3xl font-bold text-[#5c5f63] '>Adventure starts here </h1>
            <p className='ml-2 mt-1 text-[#6A727F] '> Make your app management easy and fun!</p>
            <div className="card">
              <div className='mt-5'>
                <h2 className='ml-2 mb-2 text-[#6A727F] font-bold '> First Name </h2>
                <input {...register("firstName")} name="firstName" type="text" className='w-full px-4 py-2 ml-auto border rounded-lg' placeholder='Enter FirstName' />
                {errors.firstName ? (
                  <span className="text-red-900">{errors.firstName.message}</span>) : (<></>
                )}
              </div>


              <div className='mt-5'>
                <h2 className='ml-2 mb-2  text-[#6A727F] font-bold' > Last Name </h2>
                <input {...register("lastName")} name="lastName" type="text" className='w-full px-4 py-2 ml-auto border rounded-lg ' placeholder='Enter LastName ' />
                {errors.lastName ? (
                  <span className="text-red-900">{errors.lastName.message}</span>) : (<></>
                )}
              </div>
              <div className='mt-5'>
                <h2 className='ml-2 mb-2  text-[#6A727F] font-bold' > Email </h2>
                <input {...register("email")} name="email" type="text" className='w-full px-4 py-2 ml-auto border rounded-lg ' placeholder='Enter Email' />
                {errors.email ? (
                  <span className="text-red-900">{errors.email.message}</span>) : (<></>
                )}
              </div>
              <div className='mt-5'>
                <h2 className='ml-2 mb-2  text-[#6A727F] font-bold' > Password </h2>
                <input {...register("password")} name="password" className='w-full px-4 py-2 ml-auto border rounded-lg ' placeholder='Enter Password' type="password" />
                {errors.password ? (
                  <span className="text-red-900">{errors.password.message}</span>) : (<></>
                )}
              </div>
              <div className='mt-5 ml-2'>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" value="isChecked" />
                <label className='ml-2 text-[#6A727F]' for="myCheckbox">I agree to </label>
                <a href="quen-mat-khau.html" className='ml-1 text-[#4F47E5]'> privacy policy & terms</a>
              </div>
              <div className='   border rounded-lg px-4 py-2 color bg-[#7467F1]  flex items-center justify-center mt-5 ml-auto '>
                <button type="submit" className={`text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </div>
            <div className='mt-5 mb-3 ml-20'>
              <p className='ml-16  text-[#6A727F]'> Already have an account?<Link to="/" className="ml-2 text-[#4F47E5]">Sign in instead  </Link></p>
            </div>
          </div>
        </div>

      </div>
    </form>
  )

}

export default Register;