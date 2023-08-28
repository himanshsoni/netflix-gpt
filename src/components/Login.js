import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form className=" w-3/12 p-12  absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" text-3xl p-2 m-2 font-bold w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        {!isSignIn && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />

        <button className=" rounded-lg p-4 my-6 border-2 bg-red-700 w-full">
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
