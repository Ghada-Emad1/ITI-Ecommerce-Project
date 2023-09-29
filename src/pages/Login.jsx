import React from 'react'

function Login() {
  return (
    <form >
    <div className="flex  justify-center items-center mx-auto mt-[100px] max-w-[400px] sm:max-w-[700px]">
      <div className="flex flex-col justify-center items-center bg-darkGray h-[300px]  w-[500px]  gap-5 rounded-xl">
        
        <div className="flex flex-col">
          <label className="pr-4 text-white">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            // {...register("Email")}
            className="p-2 w-[300px] outline-none border focus:border-gray-300"
          />
          {/* <span className="text-orange">{errors.Email?.message}</span> */}
        </div>
        <div className="flex flex-col">
          <label className="pr-4 text-white">Password</label>
          <input
            type="password"
            placeholder="Enter a vaild Password"
            // {...register("Password")}
            className="p-2  w-[300px] outline-none border focus:border-gray-300"
          />
          {/* <span className="text-orange">{errors.Password?.message}</span> */}
        </div>
        
        <div>
          <input
            type="submit"
            value="Login"
            className="bg-orange text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-opacity-70"
          />
        </div>
      </div>
    </div>
  </form>
  )
}

export default Login
