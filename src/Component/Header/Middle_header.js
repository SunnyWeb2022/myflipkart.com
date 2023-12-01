import React from "react";
import './Middle_header.css';
import washing_pawer from '../Images/round-header/washing_pawer.png';
import mobile from '../Images/round-header/mobile.png';
import cloths from '../Images/round-header/cloths.png';
import electronic from '../Images/round-header/electronic.png';
import home from '../Images/round-header/home.jpg';
import applinearner from '../Images/round-header/applineaner.png';
import travel from '../Images/round-header/travels.png';
import toy from '../Images/round-header/toy.png';
import bike from '../Images/round-header/bike.png';
import { NavLink } from "react-router-dom";


const Middle_header=()=>
{
    return(
        <div className="middle_header">
            <div className="Item">
                <NavLink className='nav_link' to='/Grocery_Item'>
                     <img src={washing_pawer} alt="photo"></img>
                     <span>Grocery</span>
                </NavLink>
            </div>
            <div className="Item">
                <NavLink className='nav_link' to='/Mobile_Item'>
                    <img src={mobile} alt="photo"></img>
                    <span>Mobiles</span>
                </NavLink>
            </div>
            <div className="Item">
                <NavLink className='nav_link' to='/Fashion_Item'>
                    <img src={cloths} alt="photo"></img>
                    <span>Fashion</span>
                </NavLink>
            </div>
            <div className="Item">
                <NavLink className='nav_link' to='/Electronic_Item' >
                    <img src={electronic} alt="photo"></img>
                    <span>Electronics</span>
                </NavLink>
                
            </div>
            <div className="Item">
                <NavLink className='nav_link' to='/Furniture_Item'>
                        <img src={home} alt="photo"></img>
                        <span>Home & Furniture</span>
                </NavLink>
            </div>
            <div className="Item">
                <NavLink className='nav_link' to='/Applinearncer_Item'>
                        <img src={applinearner} alt="photo"></img>
                        <span>Applinearner</span>
                </NavLink>
            </div>
            <div className="Item">
                <NavLink className='nav_link' to='/Travel_Item'>
                    <img src={travel} alt="photo"></img>
                    <span>Travel</span>
                </NavLink>
            </div>
            <div className="Item">
                <NavLink className='nav_link' to='/Toy_Item'>
                    <img src={toy} alt="photo"></img>
                    <span>Beauty, Toy & More</span>
                </NavLink>
            </div>
            <div className="Item">
                <NavLink className='nav_link' to='/Bike_Item'>
                    <img src={bike} alt="photo"></img>
                    <span>TwoWheelers </span>
                </NavLink>
            </div>

        </div>
    );
}

export default Middle_header;