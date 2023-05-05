import {React, useState} from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector ,  useDispatch} from "react-redux";
import { toast } from "react-toastify";

// 
function Home() {

  const contacts = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // handle click events on navigation links 
function handleClick() {
    navigate("./Add");
}

//this function will delete the item from the contact...
function handleRemove(contact) {
dispatch({ type: "DELETE_CONTACT", payload:contact})
toast.success("employee info deleted")
}

  return (
 <>
    <div className={style.container}>
        <main className={style.mainBox}>
         {/* it will navigate to add page when you click using navigate hook */}
          <button
            className={`${style.btn} ${style.btnSep} ${style.iconCart} `}
            onClick={handleClick}
          >
            Add Employee
          </button>
          
         {/* table for employees*/}
          <table>
               {/* table  head*/}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            
             {/* table  body*/}
            <tbody>
            
             {/* use map method iterate the contact from redux state */}
            {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.number}</td>
                    <td>{contact.email}</td>
                    <td>{contact.position}</td>
                    <td>
                    <Link
                        to={`/edit/${contact.id}`}
                        className={`${style.buttonEdit} `}
                      >
                       <i className="fas fa-edit"></i>
                      </Link>
      
                  <button onClick={() => handleRemove(contact)}  className={`${style.buttonDelete} `}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </td>
              </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

export default Home;
