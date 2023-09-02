import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userSlice from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";


const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch({
          type: userSlice.actions.addUser.type,
          payload: {
            uid: uid,
            email: email,
            displayName: displayName,
          },
        });
      } else {
        dispatch({
          type: userSlice.actions.removeUser.type,
          payload: null,
        });
      }
    });
  }, []);
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={AppRouter} />
    </React.Fragment>
  );
};

export default Body;
