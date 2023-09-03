import Signin from "@/Components/auth-workflow/Signin";
import { getProviders } from "next-auth/react";
import React from "react";

const page = async () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default page;
