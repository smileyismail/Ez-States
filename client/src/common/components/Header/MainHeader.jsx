import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <header className="flex w-full items-center justify-between bg-rose-600 px-[8%] py-3 text-neutral-100">
      <Link to="/">
        <h1 className="text-2xl font-black">Ez-States</h1>
      </Link>

      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default MainHeader;
