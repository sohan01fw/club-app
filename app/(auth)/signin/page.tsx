"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  const login = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  const signInWithGoogle = async () => {
    const res = await signIn("google", {
      callbackUrl: "http://localhost:3000/",
    });
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign up with Google</button>
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="JohnDoe@gmail.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="your password...."
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Page;
