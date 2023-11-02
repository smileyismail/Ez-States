import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="flex items-center justify-evenly gap-4 text-lg font-semibold">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : ""
            }
          >
            Explore
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/userId/estates"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : ""
            }
          >
            My Estates
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/estates/new"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : ""
            }
          >
            Add New
          </NavLink>
        </li>
        <li className="rounded-md bg-emerald-600 px-6 py-1.5 text-center">
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : ""
            }
          >
            {" "}
            LogIn/SignUp
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
