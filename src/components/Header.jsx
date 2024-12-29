import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-blue-100">
      <header className="flex justify-between w-[1200px] mx-auto items-center mb-10">
        <nav className="flex gap-5 py-10">
          <Link to={"/"} className="text-gray-950 hover:text-opacity-50  ">
            Home
          </Link>
          <Link to={"/about"} className="text-gray-950 hover:text-opacity-50">
            About
          </Link>
          <Link
            to={"/products"}
            className="text-gray-950 hover:text-opacity-50"
          >
            Products
          </Link>
        </nav>
        <div className="flex gap-5">
          <Link
            to={"/sign"}
            className="bg-blue-600 text-white py-1 px-5 rounded-md hover:bg-blue-700"
          >
            {" "}
            Sign{" "}
          </Link>
          <Link
            to={"/register"}
            className="bg-blue-600 text-white py-1 px-5 rounded-md hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
