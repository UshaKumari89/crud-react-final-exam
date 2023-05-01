import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Home.module.scss";

function Home() {
  function handleClick(e) {
    e.preventDefault();
    console.log('You can add me.');
  }
  return (
    <>
      <div className={style.container}>
        <main className = {style.mainBox}>
        <Link path = '/Add'>
          <button className={`${style.btn} ${style.btnSep} ${style.iconCart} `} onClick={handleClick}>Add me</button>
        </Link>
          <h1>this is heading 1</h1>
        
        </main>
      
      </div>
    </>
  )
}

export default Home
