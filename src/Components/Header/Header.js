import React, { useState } from 'react';
import './Header.css';
import Logo from "../../pic/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark ,faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    //when scroll header at top
    window.addEventListener("scroll",function (){
        const header = document.querySelector(".header")
        header.classList.toggle("active",window.scrollY > 100)
    })
    //toggle menu
    const [Mobile,setMobile] = useState(false)

    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                  <div className="logo">
                      <img src={Logo} alt="" />
                  </div>
                  <div className="navlink">
                      {/* <ul className='link f_flex uppercase'> */}
                          <ul className={Mobile ? "nav-links-mobile":"link f_flex uppercase"} onClick={()=>setMobile(false)}>
                          <li><a href="#home">home</a></li>
                          <li><a href="#features">features</a></li>
                          <li><a href="#protfolio">protfolio</a></li>
                          <li><a href="#resume">resume</a></li>
                          <li><a href="#clients">clients</a></li>
                          <li><a href="#blog">blog</a></li>
                          <li><a href="#contact">contact</a></li>
                          <li><button className='home_btn'>BUY NOW</button></li>
                      </ul>
                      <button className='toggle' onClick={() => setMobile(!Mobile)}>
                          {Mobile ?  <FontAwesomeIcon className='close home_btns' icon={faXmark} /> : <FontAwesomeIcon className='open' icon={faBarsStaggered} /> }
                      
                      </button>
                  </div>
                </div>
            </header>   
        </>
    );
};

export default Header;