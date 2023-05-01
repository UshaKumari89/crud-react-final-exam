import React from "react";
import { Link, useParams} from 'react-router-dom'
import style from "./AddContact.module.scss";

function EditContact() {

const {id} = useParams()
  return (
    <>
      <div className={style.containerBox}>
     
      <div className={style.formContainer}>
      <h3>Edit student {id}</h3>
          <form>
        
            <div>
              <input
                type="text"
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* <section>
              <input
                type="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section> */}
            {/* <section>
              <input
                type="number"
                placeholder="Phone..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </section> */}
            <div className={style.btnGroup}>
              <button
                className={`${style.btn} ${style.btnSep} ${style.iconCart1} `}
              >
                Update
              </button>
              <button
                className={`${style.btn} ${style.btnSep} ${style.iconCart2} ${style.btnCancel} `}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditContact;
