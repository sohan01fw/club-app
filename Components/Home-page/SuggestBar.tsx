import React from "react";
import ClubPost from "./ClubPost";
import Suggestcommunities from "./SuggestComponent/Suggestcommunities";
import SuggestPeople from "./SuggestComponent/SuggestPeople";

const SuggestBar = () => {
  return (
    <section>
      <div className=" mt-[5rem] bg-white max-md:hidden w-60 ">
        <Suggestcommunities />
        <SuggestPeople />
      </div>
    </section>
  );
};

export default SuggestBar;
