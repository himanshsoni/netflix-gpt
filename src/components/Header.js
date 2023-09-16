import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGpt);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component is destroyed
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from black z-30 flex flex-col md:flex-row justify-center md:justify-between ">
      <img
        className="w-44 md:w-32 lg:w-48 mx-auto md:mx-0"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />
      {user !== null && (
        <div className="flex justify-between md:flex">
          <button
            className="p-2 m-4 bg-red-500 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGpt ? "Home " : "GPT Search"}
          </button>
          <img
            className="hidden md: inline-block w-16 h-16 m-2 p-2"
            src={USER_LOGO}
            alt="user-logo"
          />
          <button
            onClick={handleSignout}
            className="cursor-pointer p-2 m-4 text-2xl bg-red-500  text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
