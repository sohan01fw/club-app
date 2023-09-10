import { Button } from "@/Components/ui/button";
import React from "react";

const Suggestcommunities = () => {
  return (
    <div>
      <div className="title text-lg font-bold mb-5">Suggest Communities</div>
      <div className="communities flex justify-center">
        <div className="profile"></div>
        <div className="community_name">nice community</div>
        <div className="joinBtn">
          <Button variant="link" className="clubcolorbg shadow-lg">
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Suggestcommunities;
