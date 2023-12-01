import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Top_header from './Component/Header/Top_header';
import Middle_header from './Component/Header/Middle_header';
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';
import Grocery_product from "./Component/Grocery/Grocery_product";
import Grocery_Add_Card from "./Component/Grocery/Grocery_Add_Card";

import Mobile_product from "./Component/Mobile/Mobile_product";
import Fashion_product from "./Component/Fashion/Fashion_product";
import Electronic_product from "./Component/Electronic/Electronic_product";
import Furniture_product from "./Component/Furniture/Furniture_product";
import Applinearner from "./Component/Applinearncer/Applinearncer";
import Travel_product from "./Component/Travel/Travel_product";
import Toy_product from "./Component/Toy/Toy_product";
import Bike_product from "./Component/Bike/Bike_product";



function App()
 {
  return (
    <div className="App">
      <div className='header'>
            <Top_header />
            <Middle_header/>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/Grocery_Item" Component={Grocery_product} />
                <Route exact path="/Grocery_Add_Card/:id" Component={Grocery_Add_Card} />
                <Route exact path="/Mobile_Item" Component={Mobile_product} />
                <Route exact path="/Fashion_Item" Component={Fashion_product} />
                <Route exact path="/Electronic_Item" Component={Electronic_product} />
                <Route exact path="/Furniture_Item" Component={Furniture_product} />
                <Route exact path="/Applinearncer_Item" Component={Applinearner} />
                <Route exact path="/Travel_Item" Component={Travel_product} />
                <Route exact path="/Toy_Item" Component={Toy_product} />
                <Route exact path="/Bike_Item" Component={Bike_product} />
                <Route redireect="/" Component={Home}/>
            </Routes>
        </div>   
     
      
        
    </div>
  );
}

export default App;
