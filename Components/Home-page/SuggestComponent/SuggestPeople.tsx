import { Button } from "@/Components/ui/button";
import React from "react";

const SuggestPeople = () => {
  return (
    <div>
      <div className="title text-lg font-bold mb-5">People you may know</div>
      <div className="communities flex justify-center">
        <div className="profile"></div>
        <div className="community_name">Handsome Boy</div>
        <div className="joinBtn">
          <Button variant="link" className="clubcolorbg shadow-lg">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestPeople;
