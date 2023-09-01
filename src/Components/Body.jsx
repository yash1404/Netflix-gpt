import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {

    const AppRouter= createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ])
  return (
    <React.Fragment>
   <RouterProvider router={AppRouter}/>
    </React.Fragment>
  );
};

export default Body;
