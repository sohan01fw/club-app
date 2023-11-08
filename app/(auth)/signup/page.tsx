import ProviderSignin from "@/Components/auth-workflow/AuthComponent/ProviderSignin";
import Signup from "@/Components/auth-workflow/AuthComponent/Signup";
import { ConnectToDB } from "@/lib/mongoose";

import React from "react";

const page = async () => {
  await ConnectToDB();
  return (
    <div className="signIn_page grid place-items-center ">
      <div className="bg-white   rounded-[13px] shadow-md w-full ml-3 mr-3 min-[460px]:w-[28rem] pl-3 pr-3 mt-20 ">
        <ProviderSignin />
        <Signup />
      </div>
    </div>
  );
};

export default page;
