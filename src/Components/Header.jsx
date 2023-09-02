import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <React.Fragment>
      <div className="absolute flex justify-between items-center z-10 px-4 w-full py-2 bg-gradient-to-b from-black">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && (
          <h1
            onClick={handleSignOut}
            className=" text-red-600 font-bold text-xl hover:bg-red-600 hover:text-white px-2 py-2 cursor-pointer"
          >
            Sign Out
          </h1>
        )}
      </div>
    </React.Fragment>
  );
};

export default Header;
