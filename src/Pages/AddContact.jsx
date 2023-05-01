import React from "react";
// import { Link } from 'react-router-dom'
import style from "./AddContact.module.scss";

function AddContact() {
  return (
    <>
      <div className={style.containerBox}>
        <div className={style.formContainer}>
          <form>
            <h6>please Add information here...</h6>
            <section>
              <input
                type="text"
                placeholder="Name..."
               
            
              />
            </section>
            <section>
        
              <input
                type="email"
                placeholder="Email..."/>
            </section>
            <section>
              <input
                type="number"
                placeholder="Phone..."/>
            </section>

            <button
              className={`${style.btn} ${style.btnSep} ${style.iconCart} `}
            >
              Add Info
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddContact;
