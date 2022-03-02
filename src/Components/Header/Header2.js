import React from 'react';
import './Header.css'

import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark ,faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import logo from './../../pic/logo-removebg-preview.png';
const Header2 = () => {
    return (
        <>
             <nav className="navbar navbar-expand-lg nav-bar ">
                <div className="container-fluid">
                  <a className="navbar-brand logo" href="#home"><img src={logo} alt="" /></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className='home_btns' style={{color:'ff014f'}} icon={faBarsStaggered} />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 uppercase">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#features">features</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#protfolio">protfolio</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#resume">resume</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#clients">clients</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#blog">blog</a>
                      </li> 
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                      </li> 
                    </ul> 
                    <form className="d-flex">
                      <button className="btn home_btn" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
        </>
    );
};

export default Header2;