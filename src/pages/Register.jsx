import React from "react";

function Register() {
  return (
    <form>
      <div className="flex  justify-center items-center min-w-[1000px] h-screen ">
        <div className="flex flex-col justify-center items-center bg-darkGray text-white w-[500px] h-[400px] gap-5 rounded-xl">
          <div>
            <label className="pr-4">User Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 rounded-lg w-[250px] outline-none border focus:border-gray-300"
            />
          </div>
          <div>
            <label className="pr-4">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded-lg w-[250px] outline-none border focus:border-gray-300"
            />
          </div>
          <div>
            <label className="pr-4">Password</label>
            <input
              type="password"
              placeholder="Enter a vaild Password"
              className="p-2 rounded-lg w-[250px] outline-none border focus:border-gray-300"
            />
          </div>
          <div>
            <label className="pr-4">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="p-2 rounded-lg w-[250px] outline-none border focus:border-black"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Register"
              className="bg-orange textt-white px-6 py-2 rounded-lg cursor-pointer hover:bg-opacity-70"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
