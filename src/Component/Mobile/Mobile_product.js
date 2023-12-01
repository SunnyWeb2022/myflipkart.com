import React from "react"; 
import './Mobile_product.css';
import Mobile_common_product from "./Mobile_common_product";
import Mobile_Card from "./Mobile_Card";

const Mobile_product=()=>
{
    return(
        <>
            {/* <h1>this is the Mobile_product here</h1> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <div className="row gy-1">
                            {
                                Mobile_common_product.map((val,index)=>{
                                    return <Mobile_Card
                                            product_id={val.id}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            current_price={val.price}
                                            old_price={val.old_price}
                                            storage={val.storage}
                                            display={val.display}
                                            camera={val.camera}
                                            bettery={val.bettry}
                                            warranty={val.warranty}
                                            

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

export default Mobile_product;