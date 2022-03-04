import React from 'react';
import logo from "./../../pic/logo-removebg-preview.png";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container text-center top">
                 <div className="img">
                  <img style={{width:"100px"}} src={logo} alt="" />
                </div>  
                <p>2022.All right reserved by Tariqul Islam</p>  
                </div>    
            </footer>   
        </>
    );
};

export default Footer;