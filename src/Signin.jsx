import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from './schema/signinSchema';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

function Signin() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const formSubmitHandler = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post('https://dev-tuts-backend.vercel.app/auth/signin', formData);
      const { data } = response;

      //lưu thông tin đăng nhập vào LocalStorage nếu đăng nhập thành công
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setLoading(false); // stop
      //chuyển hướng đến trang sau khi đăng nhập thành công
      navigate('/userlist');
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <div className='flex items-center justify-center h-screen bg-[#4070F4]'>
        <div className='w-[450px] h-[500px] rounded-lg bg-white'>
          <div className='mx-4'>
            <h1 className='my-4 ml-2 text-3xl font-bold'>Welcome back!</h1>
            <p className='ml-2 mt-1 text-[#6A727F]'>Please enter your credentials to sign in!</p>
            <div className="card">
              <div className='mt-5'>
                <h2 className='ml-2 mb-2 text-[#6A727F] font-bold'>Email</h2>
                <input {...register("email")} name="email" type="text" className='w-full px-4 py-2 ml-auto border rounded-lg' placeholder='Enter Email' />
                {errors.email && (
                  <span className="text-red-900">{errors.email.message}</span>
                )}
              </div>
              <div className='mt-5'>
                <h2 className='ml-2 mb-2 text-[#6A727F] font-bold'>Password</h2>
                <input {...register("password")} name="password" type="password" className='w-full px-4 py-2 ml-auto border rounded-lg' placeholder='Enter Password' />
                {errors.password && (
                  <span className="text-red-900">{errors.password.message}</span>
                )}
              </div>
              <div className='mt-5 ml-2'>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" value="isChecked" />
                <label className='ml-2 text-[#6A727F]' htmlFor="myCheckbox">Remember Me</label>
                <Link to="/forgotpassword" className="ml-2 text-[#4F47E5]">Forgot Password</Link>
              </div>
              <div className='border rounded-lg px-4 py-2 color bg-[#4F47E5] flex items-center justify-center mt-5 ml-auto'>
                <button type="submit" className={`text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
            </div>
            <div className='mt-5 mb-3'>
              <p className='ml-16 text-[#6A727F]'>Don't have an account yet?
                <Link to="/register" className="ml-2 text-[#4F47E5]">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signin;