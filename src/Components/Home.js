import React from 'react';
import Pizzaform from './Pizzaform';
import {Routes, Route, Link, } from 'react-router-dom';







const Home = () => {
 

    return(
       
        <div className="home-page">
            <h1>The cupboard under the stairs</h1>
            
          <nav>
          <button><Link to="/pizza" id="order-pizza">Order</Link></button>
          </nav>
      
        
      
      

           
            
        </div>
    )
}

export default Home;