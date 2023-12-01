import React from "react";
import './Top_header.css';
import flipkart_logo from '../Images/logo/flipkart_logo.png';

const Top_header=()=>
{
    return(
        <div className="top_header">
             <div className="logo">
                  <img src={flipkart_logo} alt="Logo"></img>  
                    <i><p className="logo_text">Explore <span className="logo_plus">Plus</span></p></i>   
            </div> 
            <div className="search_bar">
                <input type="search" placeholder="search for products,brands and more.."/>
            </div>  
            <div className="login_box">
                <p>Login</p>
            </div>
            <div className="seller text-white">
                <p>Become a seller</p>
            </div>
            <div className="cart">
                <p>Cart</p>
            </div>
        </div>

    );
}

export default Top_header;