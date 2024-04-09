
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from './schema/formSchema';
import { Link } from 'react-router-dom';
function Login() {
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
        <div className='w-[450px] h-[500px]  rounded-lg bg-white '>
          <div className='mx-4'>
            <h1 className='my-4 ml-2 text-3xl font-bold'>Welcome to back! </h1>
            <p className='ml-2 mt-1 text-[#6A727F] '> Please enter your credentials to sign in!</p>
            <div className="card">
              <div className='mt-5'>
                <h2 className='ml-2 mb-2 text-[#6A727F] font-bold '> User Name </h2>
                <input {...register("username")} name="username" type="text" className='w-full px-4 py-2 ml-auto border rounded-lg' placeholder='Enter UserName' />
                {errors.username ? (
                  <span className="text-red-900">{errors.username.message}</span>) : (<></>
                )}
              </div>


              <div className='mt-5'>
                <h2 className='ml-2 mb-2  text-[#6A727F] font-bold' > Password </h2>
                <input {...register("password")} name="password" type="text" className='w-full px-4 py-2 ml-auto border rounded-lg ' placeholder='Enter Password' />
                {errors.password ? (
                  <span className="text-red-900">{errors.password.message}</span>) : (<></>
                )}
              </div>
              <div className='mt-5 ml-2'>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" value="isChecked" />
                <label className='ml-2 text-[#6A727F]' for="myCheckbox">Remember Me</label>
                <a href="quen-mat-khau.html" className='ml-20 text-[#4F47E5]'>Forgot Password</a>
              </div>
              <div className='   border rounded-lg px-4 py-2 color bg-[#4F47E5]  flex items-center justify-center mt-5 ml-auto '><button className='text-white'> Sign In</button></div>
            </div>
            <div className='mt-5 mb-3'>
              <p className='ml-16  text-[#6A727F]'> Don't have an account yet?<Link to="/register" className="ml-2 text-[#4F47E5]">Sign up
              </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </form>
  )

}

export default Login;