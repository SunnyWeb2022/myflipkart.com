import React from "react";
import Slide1 from '../Images/caursole/slider1.jpg';
import Slide2 from '../Images/caursole/slider2.jpg';
import Slide3 from '../Images/caursole/slider3.jpg';
import Slide4 from '../Images/caursole/slider4.png';


const Slide=()=>
    {
        return(
            <>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={Slide1} class="d-block w-100" alt="photo" />
                    </div>
                    <div class="carousel-item">
                      <img src={Slide2} class="d-block w-100" alt="photo" />
                    </div>
                    <div class="carousel-item">
                      <img src={Slide3} class="d-block w-100" alt="photo" />
                    </div>
                    <div class="carousel-item">
                      <img src={Slide4} class="d-block w-100" alt="photo" />
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            
        </>
    );
}

export default Slide;