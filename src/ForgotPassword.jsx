
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from './schema/registerSchema';
import { Link } from 'react-router-dom';
function ForgotPassword() {
  const { register,
    handleSubmit,
    formState: { errors }, } = useForm({
      resolver: yupResolver(registerSchema),
    });

  const formSubmitHandler = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <div className='flex items-center justify-center h-screen bg-[#4070F4]' >
        <div className='w-[700px] h-[400px]  rounded-lg bg-white '>
          <div className='mx-16 mt-20'>
            <h1 className='my-4 ml-2 text-3xl font-bold text-[#6A727F]'>Forgot Password? </h1>
            <p className='ml-2 mt-1 text-[#6A727F] '> Enter your email and we'll send you instructions to reset your password</p>
            <div className="card">


              <div className='mt-5'>
                <h2 className='ml-2 mb-2  text-[#6A727F] font-bold' > Email </h2>
                <input {...register("email")} name="email" type="text" className='w-full px-4 py-2 ml-auto border rounded-lg ' placeholder='Enter Password' />
                {errors.email ? (
                  <span className="text-red-900">{errors.email.message}</span>) : (<></>
                )}
              </div>

              <div className='   border rounded-lg px-4 py-2 color bg-[#4F47E5]  flex items-center justify-center mt-5 ml-auto '><button className='text-white'> Send reset link</button></div>
            </div>
            <div className='mt-5 mb-3'>
              <p className='ml-16  text-[#6A727F]'> <Link to="/register" className="ml-40 text-[#4F47E5]"> Back to login
              </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </form>
  )
}
export default ForgotPassword;

