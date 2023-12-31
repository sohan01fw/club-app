import ProviderSignin from "@/Components/auth-workflow/AuthComponent/ProviderSignin";
import React from "react";
import Signin from "@/Components/auth-workflow/AuthComponent/Signin";

const page = async () => {
  return (
    <div className="signIn_page grid place-items-center ">
      <div className="bg-white   rounded-[13px] shadow-md w-full ml-3 mr-3 min-[460px]:w-[28rem] pl-3 pr-3 mt-20 ">
        <ProviderSignin />
        <Signin />
      </div>
    </div>
  );
};

export default page;
