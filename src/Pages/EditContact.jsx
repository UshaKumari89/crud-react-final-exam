import React from "react";
import { Link, useParams, useNavigate} from 'react-router-dom'
import style from "./AddContact.module.scss";
import {  useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { toast } from "react-toastify";

function EditContact() {

const {id} = useParams()
const contacts = useSelector((state) => state);
const dispatch = useDispatch();
const navigate  = useNavigate()

//current conatact it will find the contact object
const currentContact = contacts.find(
  (contact) => contact.id === parseInt(id));
  
  //current conatact will be updated with the new contact object using useState hook
const [updatedName, setUpdatedName] = useState(currentContact.name);
const [updatedNumber, setUpdatedNumber] = useState(currentContact.number);
const [updatedEmail, setUpdatedEmail] = useState(currentContact.email);
const [updatedPosition, setUpdatedPosition] = useState(currentContact.position);

//it will be updated when the contact is updated
  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: "UPDATE_CONTACT",
      
      payload: {
        id: currentContact.id,
        name: updatedName,
        number:updatedNumber,
        email: updatedEmail,
        position: updatedPosition,
        
        
      }
    });
    toast.success('Info is updates successfully');
    navigate('/');
  }
  

  return (
    <>
      <div className={style.containerBox}>
      {currentContact ?
      <>
     <div className={style.formContainer}>
      <h3>Edit Employee {id}</h3>
          <form>
        
            <div>
              <input
                type="text"
                placeholder="Name..."
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </div>
          
            <section>
              <input
                type="email"
                placeholder="Email..."
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
            </section>
            <section>
              <input
                type="number"
                placeholder="Phone..."
                value={updatedNumber}
                onChange={(e) => setUpdatedNumber(e.target.value)}
              />
            </section>
            <section>
              <input
                type="text"
                placeholder="Position..."
                value={updatedPosition}
                onChange={(e) => setUpdatedPosition(e.target.value)}
              />
            </section>
            <div className={style.btnGroup}>
            {/* it will be updated when the contact is updated */}
              <button onClick={handleClick}
                className={`${style.btn} ${style.btnSep} ${style.iconCart1} `}
              >Update
              </button>
                {/* it will navigate  to home page */}
              <button onClick={() => navigate('/')} 
                className={`${style.btn} ${style.btnSep} ${style.iconCart2} ${style.btnCancel} `}
              >Cancel
              </button>
            </div>
          </form>
        </div>
        </>
      : (<h3>Employee with the id {id} is not exist</h3>)}
      </div>
      
    </>
  );
}

export default EditContact;
