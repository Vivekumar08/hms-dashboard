import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link
        to={href}
        className={`${className} relative group  text-xl ${
          location.pathname == href
            ? "text-blue-700 dark:text-light font-bold"
            : "text-slate-600 "
        }`}
      >
        <span>{title}</span>
        <span
          className={`h-[3px] inline-block bg-blue-700 dark:bg-light absolute left-0 -bottom-3 group-hover:w-full transition-[width] ease duration-300 ${
            location.pathname == href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };
  return (
    <nav className="w-full flex items-center justify-start h-8 ">
      <CustomLink href={"/"} title={"Scheduled Dashboard"} className="mr-2" />
      <CustomLink href={"/appt-desk"} title={"Appt Desk"} className="mx-2" />
      <CustomLink href={"/patient-tab"} title={"Patient Tab"} className="mx-2" />
    </nav>
  );
};

export default Navbar;
