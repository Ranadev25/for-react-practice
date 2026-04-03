import React from "react";
import "./../App.css";
import { NavLink, Outlet } from "react-router";

const Home = () => {
  return (
    <div className="">
      <h1>This is Home section</h1>
      <div className="">
        <header>
          <nav>
            <ul className="flex justify-center  gap-5">
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contract">Contract</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className=" flex items-start ">
          <ul className="flex flex-col items-start w-50 justify-center t4ext-center bg-blue-500 p-2 text-white leading-8">
            <NavLink to="/about">about</NavLink>
            <NavLink to="/blog">Blogs</NavLink>
            <NavLink to="/contract">contract</NavLink>
          </ul>
          <Outlet></Outlet>
        </div>
      </div>
      <footer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In similique
          fugiat dolorem voluptates repudiandae, velit dolorum quisquam aperiam
          aut unde!
        </p>
      </footer>
    </div>
  );
};

export default Home;
