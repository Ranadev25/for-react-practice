import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home/Home.jsx";
import Contract from "./Contract/Contract.jsx";
import Blogs from "./Blog/Blogs.jsx";
import About from "./About/About.jsx";
import Text1 from "./component/Text1.jsx";
import Text2 from "./component/Text2.jsx";
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/blog", element: <Blogs /> },
      {path: "/contract", element: <Contract />},
      {
        path: "about",
        element: <About />,
        children: [
          {path:"text1", element: <Text1/>},
          {path:"text2", element: <Text2/>}
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
