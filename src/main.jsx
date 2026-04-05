import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home/Home.jsx";
import Contract from "./Contract/Contract.jsx";
import Blogs from "./Blog/Blogs.jsx";
import About from "./About/About.jsx";
import Text1 from "./component/Text1.jsx";
import Text2 from "./component/Text2.jsx";
import SingleUser from "./component/SingleUser.jsx";
import Formilk from "./Home/Formilk.jsx";
// import App from './App.jsx'

const users2 = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  res.json(),
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/blog", element: <Blogs /> },
      { path: "/contract", element: <Contract /> },
      { path: "/", element: <Formilk /> },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "users",
            loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
            element: <Text1 />,
          },
          {
            path: "users2",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Text2 users2={users2} />
              </Suspense>
            ),
          },
          {
            path: "users2/:userId",
            loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) ,
            Component:SingleUser
          },
        ],
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
