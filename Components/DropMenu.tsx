"use client";
// components/Dropdown.js
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

type UserProps = {
  name: string;
  image: string;
};
const Dropdown = ({ name, image }: UserProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    const signOutPromise = signOut({ callbackUrl: "/signin" });

    // Once signOut is complete, navigate to the signin page
    await signOutPromise;
  };
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className=""
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <div className="profile flex transition-transform transform active:scale-95">
          <Avatar className="border mt-3 mr-2   ">
            <AvatarImage src={`${image}`} alt="@shadcn" />
            <AvatarFallback>Club</AvatarFallback>
          </Avatar>
          <div className="nameandbtn mt-5 mr-2 max-md:hidden ">
            <h3 className="font-semibold">{name}</h3>
            {/* <Button variant="link" className=" clubcolorbg">
            SignOut
          </Button> */}
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-3  mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          style={{ transition: "all 0.3s ease" }}
        >
          {/* Dropdown options */}
          <div className="py-1">
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              profile
            </Link>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <button onClick={handleSignOut}>SignOut</button>
            </div>
            {/* Add more options as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
