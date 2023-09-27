import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
function Register() {
  const[open,setopen]=useState(false);
  const shema = yup.object().shape({
    userName: yup.string().required("Your Name is Required"),
    Email: yup.string().email("Invaild Email").required("Email is Required"),
    Password: yup
      .string()
      .min(6, "password must be at least 6 characters")
      .max(20)
      .required("Password is Required"),
    ConfirmPass: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Password don't Match")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(shema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    <Link to="/login"></Link>
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex  justify-center items-center min-w-[1000px] mx-auto mt-[50px]">
        <div className="flex flex-col justify-center items-center bg-darkGray  w-[500px] h-[550px] gap-5 rounded-xl">
          <div className="flex flex-col ">
            <label className="pr-4 text-white">User Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("userName")}
              className="p-2  w-[300px] outline-none border focus:border-gray-300"
            />
            <span className="text-orange">{errors.userName?.message}</span>
          </div>
          <div className="flex flex-col">
            <label className="pr-4 text-white">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("Email")}
              className="p-2 w-[300px] outline-none border focus:border-gray-300"
            />
            <span className="text-orange">{errors.Email?.message}</span>
          </div>
          <div className="flex flex-col">
            <label className="pr-4 text-white">Password</label>
            <input
              type="password"
              placeholder="Enter a vaild Password"
              {...register("Password")}
              className="p-2  w-[300px] outline-none border focus:border-gray-300"
            />
            <span className="text-orange">{errors.Password?.message}</span>
          </div>
          <div className="flex flex-col">
            <label className="pr-4 text-white">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              {...register("ConfirmPass")}
              className="p-2 w-[300px] outline-none border focus:border-black"
            />
            <span className="text-orange">{errors.ConfirmPass?.message}</span>
          </div>
          <div>
            <input
              type="submit"
              value="Register"
              className="bg-orange text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-opacity-70"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
