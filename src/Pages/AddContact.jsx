import React, { state, useState } from "react";
// import { Link } from 'react-router-dom'
import style from "./AddContact.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddContact() {
  //use state hook for name , email phone and position to set the state accordingly
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handleClick event for navigation and adding the info about the employee
  function handleClick(e) {
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      number,
      email,
      position,
    };
    if (!handleSubmitError(e)) {
      dispatch({ type: "ADD_CONTACT", payload: data });
      toast.success("Employee added successfully");
      navigate("/");
    }
  }

  //handleSubmitError to handle the error that occurred when submitting the contact
  const handleSubmitError = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === number && number
    );

    if (!name || !number || !email || !position) {
      return toast.warning("Please fill all fields");
    }

    if (checkEmail) {
      return toast.error("This email is already in use");
    }

    if (checkNumber) {
      return toast.error("This number is already in use");
    }
  };
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            <section>
              <input
                type="text"
                placeholder="Number..."
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </section>
            <section>
              <input
                type="text"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>

            <section>
              <input
                type="text"
                placeholder="Postion..."
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </section>

            <div className={style.btnGroup}>
            {/* handleClick event for navigation and adding the info about the employee */}
              <button
                type="button"
                onClick={handleClick}
                className={`${style.btn} ${style.btnSep} ${style.iconCart} `}
              >
                Submit
              </button>
              {/* it will navigate to home when you click the button...*/}
              <button
                onClick={() => navigate("/")}
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

export default AddContact;
