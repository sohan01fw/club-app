"use client";

import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import React from "react";
import * as Yup from "yup";
const Form = () => {
  interface userValue {
    email: string;
    password: string;
  }
  const login = async (e: any, values: userValue) => {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  //form validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(8, "Must be 8 characters or less")
        .required("required"),
    }),
    onSubmit: (values) => {
      login(values, values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col ml-4  w-[25rem] m-5 "
    >
      <div className="emailandpass flex flex-col">
        <label htmlFor="email" className="font-semibold text-sm ">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="JohnDoe@gmail.com"
          className=" outline-[#5271FF] rounded-[5px] p-2 shadow-md mb-4 mt-1"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 font-semibold text-sm mt-[-10px] mb-4 ml-1">
            {formik.errors.email}!
          </div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password...."
          className=" outline-[#5271FF] rounded-[5px] p-2 shadow-md mb-4 mt-1"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 font-semibold text-sm mt-[-10px] mb-4 ml-1">
            {formik.errors.password}!
          </div>
        ) : null}
      </div>
      <button
        type="submit"
        className=" mt-4 p-2 bg-[#5271FF] text-white font-medium rounded-[5px]  shadow-md transition-transform transform active:scale-95"
      >
        Continue
      </button>
      {/* i will see later */}
      {/* <div className="flex justify-between pt-3">
        <h2 className=" w-48 font-semibold text-[10px] text-red-500">
          Warning!
          <p className="x w-48 font-semibold text-[10px] text-black">
            Remember your Email and password
          </p>
        </h2>
        <h3 className=" w-42 font-semibold text-[11px] pt-3">
          Forget Your Password?
        </h3>
      </div> */}
    </form>
  );
};

export default Form;
