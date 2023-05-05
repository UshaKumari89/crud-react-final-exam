import React from "react";
import style from './Navbar.module.scss'

function Navbar() {

const heading = 'Contact App'
  return (
    <>
      <nav>
      <ul>
        <li>
          <span className={style.actualText}>&nbsp;{heading}&nbsp;</span>
          <span className={style.hoverText} aria-hidden="true">&nbsp;{heading}&nbsp;
          </span>
        </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
