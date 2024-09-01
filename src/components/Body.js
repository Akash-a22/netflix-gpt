import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

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
  ]);

  return (
    <div >
      <RouterProvider router={appRouting} />
    </div>
  );
};

export default Body;
