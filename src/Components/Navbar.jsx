import React from "react";
import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";



const heading= "Contact App"
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/"><h2 className={style.heading}><i className="fa-sharp fa-solid fa-address-card fa-fade"></i> {heading}</h2></Link>
   </nav>
  );
};

export default Navbar;
