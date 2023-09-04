import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    //if user is valid
    //check if it is sign-in or sign-up

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage + errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="w-screen h-screen" src={NETFLIX_BG} alt="logo" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 p-12  absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className=" text-3xl p-2 m-2 font-bold w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-xl">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className=" rounded-lg p-4 my-6 border-2 bg-red-700 w-full"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <>
            <p>
              New to Netflix?{" "}
              <button
                onClick={() => {
                  setIsSignIn(!isSignIn);
                }}
              >
                SignUp
              </button>
            </p>
          </>
        ) : (
          <p>
            Already have an account?{" "}
            <button
              onClick={() => {
                setIsSignIn(!isSignIn);
              }}
            >
              Sign In
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
