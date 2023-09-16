import AuthForm from "@/Components/auth-workflow/AuthComponent/AuthForm";
import Signin from "@/Components/auth-workflow/AuthComponent/Signin";

import React from "react";

const page = async () => {
  return (
    <div className="signIn_page grid place-items-center ">
      <div className="bg-white   rounded-[13px] shadow-md w-full ml-3 mr-3 min-[460px]:w-[28rem] pl-3 pr-3 mt-20 ">
        <Signin />
        <AuthForm />
      </div>
    </div>
  );
};

export default page;
