import React from "react";
import './Grocery_product.css';
import Grocery_card from "./Grocery_card";
import Grocery_comman_product from "./Grocery_comman_product";

const Grocery_product=()=>
{
    //   const [Assending,setAssending]=useState(props.price);

    //   console.log(Assending);

    return(
        <>
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-md-2 border">
                        
                    </div>    
                    <div className="col-md-10">
                        <div className="row gy-2">
                            {
                                Grocery_comman_product.map((val,index)=>
                                {
                                    return <Grocery_card 
                                             product_id={val.id}   
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            price={val.price}
                                            old_price={val.old_price}
                                            quantity={val.quantity}
                                    />  
                                })
                            }    

                            

                        </div>

                    </div>

                </div>    
            </div>
        </> 
    );
}
export default Grocery_product;