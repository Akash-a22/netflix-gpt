import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import LearnMore from "./LearnMore";
import ForgotPassword from "./ForgotPassword";

const Body = () => {
  const appRouting = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/learnMore",
      element: <LearnMore />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouting} />
    </div>
  );
};

export default Body;
