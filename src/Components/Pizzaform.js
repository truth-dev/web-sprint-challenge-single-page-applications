import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

const Pizzaform = (props) => {



const {

change,
errors,
user
} = props;



const onChange = evt => {
const {name, value} = evt.target 

change(name, value);
}

  return (
    

    <div>
     
      <h1>Order form</h1>
      

      <form id="pizza-form">

        <label>Name:</label>
        <input
          id='name-input'
          type='text'
          name='user'
          value={user}
          onChange={onChange}
          

        />
        <div>{errors.user}</div>

        <select id="size-dropdown">
        <option value='choose your top'>Choose a size</option>
        <option value='personal pan' >Personal Pan</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
        <option value='x-large'>X-Large</option>
        </select>
        
        <label>X-tra Cheese:
          <input
            type="checkbox"
            name="xtra"

          />
        </label>
        <label>Pepperoni:
          <input
            type="checkbox"
            name="peperoni"

          />
        </label>
        <label>Mushrooms
          <input
            type="checkbox"
            name="mushroom"

          />
        </label>
        <label>Sausage:
          <input
            type="checkbox"
            name="sausage"

          />
          
        </label>
        
        <label>
          <input id='special-text'
            placeholder="special instructions"
            type='text'
            name='Special instructions'


          />
        </label>
      
        <label>
          <input 
          id="order-button"
          type='submit'
          name="Add to order"
          
          />
        </label>



      </form>
    

    </div>
  )
}

export default Pizzaform;
