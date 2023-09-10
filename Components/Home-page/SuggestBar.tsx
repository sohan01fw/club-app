import React from "react";
import Suggestcommunities from "./SuggestComponent/Suggestcommunities";
import SuggestPeople from "./SuggestComponent/SuggestPeople";

const SuggestBar = () => {
  return (
    <section>
      <div className=" mt-[5rem] bg-white flex flex-col justify-around maz-h-auto shadow-md  p-5 max-md:hidden w-80 ">
        <Suggestcommunities />
        <SuggestPeople />
      </div>
    </section>
  );
};

export default SuggestBar;
