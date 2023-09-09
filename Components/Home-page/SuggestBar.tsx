import React from "react";
import ClubPost from "./ClubPost";

const SuggestBar = () => {
  return (
    <section>
      <div className="border mt-[5rem] bg-white max-md:hidden ">
        <div className="suggestcommune">
          <h1>Suggest Communites</h1>
          <ClubPost />
        </div>
      </div>
    </section>
  );
};

export default SuggestBar;
