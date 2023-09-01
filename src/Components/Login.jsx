import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setSignInForm] = useState(true);

  const switchForm = () => {
    setSignInForm(!isSigninForm);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-image"
        />
      </div>
      <div>
        <form className="absolute text-white px-10 py-8 my-36 mx-auto left-0 right-0 rounded-xl bg-black/[0.8] w-3/12">
          <h1 className="text-4xl font-semibold">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSigninForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-2 mt-8 py-2 outline-none bg-gray-800 rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="w-full px-2 mt-2 py-2 outline-none bg-gray-800 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mt-2 px-2 py-2 outline-none bg-gray-800 rounded-md"
          />
          <button
            type="submit"
            className="block w-full bg-red-600 mt-8 py-2 rounded-md"
          >
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>

          <h1 className="mt-4 cursor-pointer" onClick={switchForm}>
            {isSigninForm
              ? " New to Netflix? Sign up now."
              : "Already a user? Sign in now"}
          </h1>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
