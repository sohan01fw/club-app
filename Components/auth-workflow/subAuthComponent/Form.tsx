"use client";

import { useFormik } from "formik";
import React from "react";

const Form = () => {
  const login = async (e: any, values: any) => {
    e.preventDefault();
    console.log(values);
    /* const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: true,
          callbackUrl: "/",
        }); */
  };
  //form validation
  const validate = (values: any) => {
    let errors = {};
    if (!values.email) {
      errors = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors = "Invalid email address";
    }

    return errors;
  };

  //use of formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      login(values, null);
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
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

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
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
      <button
        type="submit"
        className=" mt-4 p-2 bg-[#5271FF] text-white font-medium rounded-[5px]  shadow-md transition-transform transform active:scale-95"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
