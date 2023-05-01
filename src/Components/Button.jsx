import React from 'react'
import style from "./Button.module.scss";

function Button() {
  return (
    <>
      <button className={`${style.btn} ${style.btnSep} ${style.iconCart} `}> Button</button>
    </>
  )
}


export default Button
