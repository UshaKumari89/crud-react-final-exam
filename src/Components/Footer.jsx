import React from "react";
import style from './Footer.module.scss'

const copyright = "Copyright @2023"


function Footer() {
  return (
    <>
        <footer className={style.footer}>
            <p>{copyright}</p>
            <section className = {style.icons}>
                <i className="fa-brands fa-facebook fa-fade"></i>
                <i className="fa-brands fa-instagram fa-fade"></i>
                <i className="fa-brands fa-github fa-fade"></i>
            </section>
         
        </footer>
        

     
    </>
  );
}

export default Footer;
