import React, { useState, useRef } from "react";
import Header from "./Header";
import { isValidateFunction } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSigninForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const switchForm = () => {
    setSignInForm(!isSigninForm);
  };

  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);

  const handleSubmit = (e) => {
    // validate the form
    e.preventDefault();
    const email = Email.current.value;
    const password = Password.current.value;
    const message = isValidateFunction(email, password);
    setErrorMsg(message);

    if (message) return;
    if (!isSigninForm) {
      //signup logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
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
        <form
          onSubmit={handleSubmit}
          className="absolute text-white px-10 py-8 my-36 mx-auto left-0 right-0 rounded-xl bg-black/[0.8] w-3/12"
        >
          <h1 className="text-4xl mb-4 font-semibold">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSigninForm && (
            <input
              ref={Name}
              type="text"
              placeholder="Full Name"
              className="w-full px-2 mt-2 py-2 outline-none bg-gray-800 rounded-md"
            />
          )}
          <input
            ref={Email}
            type="text"
            placeholder="Email"
            className="w-full px-2 mt-2 py-2 outline-none bg-gray-800 rounded-md"
          />
          <input
            ref={Password}
            type="password"
            placeholder="Password"
            className="w-full mt-2 px-2 py-2 outline-none bg-gray-800 rounded-md"
          />
          <span className="text-red-600 font-semibold">{errorMsg}</span>
          <button className="block w-full bg-red-600 mt-8 py-2 rounded-md">
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
