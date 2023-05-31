import React,{useState, useEffect} from "react";
import * as yup from "yup";
 import { Routes,Route,Link,useNavigate } from 'react-router-dom';
import Pizzaform from "./Components/Pizzaform";
import formSchema from "./Validation/formSchema";
 import Home from "./Components/Home";
 import axios from 'axios';




 const orderForm = {
 name:'',
 size:''
 
 
}

 const initalOrderErrors = {
  user:'',
  size:''
  
  
 }



const App = () => {

const [orderError, setOrderError] = useState(initalOrderErrors)
const [order , setNewOrder] = useState(orderForm)

const validate = (name, value) => {
  yup.reach(formSchema, name)
  .validate(value)
  .then(()=> setOrderError({...orderError, name:""}))
  .catch(err => setOrderError({...orderError, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setNewOrder({...order, [name]: value})
}
const handleChange = (name, value) => {
  validate(name, value);
  setNewOrder({...order, [name]: value});
}


  
  return (
    <div className='container'>
       <nav>
      <Link to="/" id='home'>Home</Link>
      
      </nav>
      

      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/pizza" element={<Pizzaform change={handleChange}
                                                  errors={orderError}/>}/>
      </Routes>
    
     
    
      </div>
   
    
  )
}
export default App;
