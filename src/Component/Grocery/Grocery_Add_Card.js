import React from "react";
import { useParams} from "react-router-dom";
// import { useState,useEffect } from "react";
import Grocery_comman_product from "./Grocery_comman_product";


const Grocery_Add_Card=(props)=>{
    const {id}=useParams();
    const p=Grocery_comman_product;
    if(p.id==id)
    {
        console.log("hello");
    }
    else{
        console.log("not hello");
    }
    // const [Product, setProduct] =useState({Grocery_comman_product});

    // const fetchProduct= async (p_id) =>{
    //     const response= await Grocery_comman_product.retrieve(p_id);
    //     const {imgsrc,title,price,old_price} =response;
    //     setProduct({
    //         id,
    //         imgsrc,
    //         title,
    //         price,
    //         old_price
    //     });
    // };
    // useEffect(()=>{
    //     const p_id=window.location.pathname.split("/");
    //     fetchProduct(p_id[1]);
    // }, []);

    return(
        <>
            <div className="Container border border-danger px-5">
                <div className="row">
                    <p className="text-success h1">This is the Grocery_Add_Card {id}</p>
                    <div className="col-6 border border-primary">
                        <div className='mx-auto' id='img'>
                                <p  id="card_img"><img src={props.imgsrc} className="py-2 img-fluid h-100 w-100 " alt="Grocery_photo" /></p>
                        </div>
                    </div>
                    <div className="col-6 border border-success">
                    {/* <h6 className="">{Product.title}</h6> */}


                    </div>

                </div>
            </div>
        
        </>
    );
}
export default Grocery_Add_Card;