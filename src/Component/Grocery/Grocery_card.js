import React from 'react';
import './Grocery_product.css';
import Grocery_Add_Card from './Grocery_Add_Card';
import { NavLink } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';






const Grocery_card =(props)=>{
    return (
        <>
            
                <div className="card mx-auto" id='card'>
                   <NavLink className='single_product' to={`/Grocery_Add_Card/${props.product_id}`} >
                    <div className='mx-auto' id='img'>
                            <p  id="card_img"><img src={props.imgsrc} className="py-2 img-fluid h-100 w-100 " alt="Grocery_photo" /></p>
                    </div>
                    <div className="body py-2 mt-3">
                            <h6 className="">{props.title}</h6>
                            <p className='currency text-dark'>
                                <span><CurrencyRupeeIcon/>{props.price}</span>  
                                 <span className='text-secondary child_currency'><del><CurrencyRupeeIcon/>{props.old_price}</del></span>
                            </p>
                            <div className='d-flex mt-4 justify-content-between'>
                                    <a className='btn px-5 text-muted quantity'>{props.quantity}</a>
                                    <a href={Grocery_Add_Card} className='btn px-5 Add_Card'>Add Card</a>
                            </div>

                    </div>
                               
                     </NavLink>
                </div>
                 
        </>
    );
}
export default Grocery_card;