"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import Form from "./subAuthComponent/Form";

const Signin = () => {
  /* const signInWithGoogle = async () => {
    const res = await signIn("google",{
      callbackUrl: "http://localhost:3000/",
    });
  }; */

  return (
    <div className="signIn_page grid place-items-center ">
      <div className=" m-10 mt-40 rounded-[13px] shadow-xl">
        <Link
          href="/"
          className="  flex w-48 mt-[-30px] transition-transform transform active:scale-95 "
        >
          <img
            src="/logo/club_logo.png"
            className="h-40 ml-[-45px]"
            alt="logo"
          />

          <h1 className="text-5xl font-extrabold ml-[-45px] mt-16">lub</h1>
        </Link>

        <div className="subTitle m-4 mt-[-40px] ml-4">
          <h3 className="text-black font-semibold text-xl mb-[-4px]">
            Sign In
          </h3>
          <span className="text-gray-900  text-sm">to continue Club</span>
        </div>

        <div className="providers flex  w-32 ml-3 mt-[-5px] mb-5 ">
          <div
            className="google  shadow-md mr-4 p-1 point "
            onClick={() => {
              signIn("google");
            }}
          >
            <img src="/logo/google.png" alt="" className="" />
          </div>
          <div
            className="facebook mr-4 p-1 point  shadow-md "
            onClick={() => {
              signIn("facebook");
            }}
          >
            <img src="/logo/facebook.png" alt="" />
          </div>
          <div
            className="github p-1 point  shadow-md "
            onClick={() => {
              signIn("github");
            }}
          >
            <img src="/logo/githubpic.png" alt="" />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Signin;
