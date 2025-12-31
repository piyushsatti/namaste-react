import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu />,
      },
    ],
  },
  {
    path: "/grocery",
    element: <Grocery />,
  },
]);

// Linking component to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing the router provider to the root
root.render(<RouterProvider router={appRouter} />);
