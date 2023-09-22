"use client";
import { signIn } from "next-auth/react";
import React from "react";

const ProviderSignin = () => {
  return (
    <div className="  ">
      <div className="  flex w-48 mt-[-30px] transition-transform transform active:scale-95 ">
        <img src="/logo/club_logo.png" className="h-40 ml-[-45px]" alt="logo" />

        <h1 className="text-5xl font-extrabold ml-[-45px] mt-16">lub</h1>
      </div>

      <div className="subTitle m-4 mt-[-40px] ml-4">
        <h3 className="text-black font-semibold text-xl mb-[-4px]">Sign In</h3>
        <span className="text-gray-900  text-sm">to continue Club</span>
      </div>

      <div className="providers flex justify-around  w-[10rem] ml-3 mt-[-5px] mb-5 ">
        <div
          className="google cursor shadow-md  p-2 point mr-2  transition-transform transform active:scale-95"
          onClick={() => {
            signIn("google", {
              callbackUrl: "http://localhost:3000/profile",
            });
          }}
        >
          <img src="/logo/google.png" alt="logo" className="google_logo" />
        </div>
        <div
          className="facebook cursor   p-2 point  shadow-md transition-transform transform active:scale-95 mr-2 "
          onClick={() => {
            signIn("facebook", {
              callbackUrl: "http://localhost:3000/profile",
            });
          }}
        >
          <img src="/logo/facebook.png" alt="facebook_logo" />
        </div>
        <div
          className="github cursor  p-2 point mr-2 shadow-md transition-transform transform active:scale-95"
          onClick={() => {
            signIn("github", {
              callbackUrl: "http://localhost:3000/profile",
            });
          }}
        >
          <img src="/logo/githubpic.png" alt="github_logo" />
        </div>
      </div>
    </div>
  );
};

export default ProviderSignin;
