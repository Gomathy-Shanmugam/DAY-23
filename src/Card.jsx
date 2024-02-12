import React, { useState } from 'react'
// import ParentComponent from './ParentComponent';



  
  function Card({ product, onToggleCart, isInCart}) {
    // const [timer, setTimer] = useState(0);

    // const handleAddToCart = () => {
    //   setTimer(timer + 1);
    //   // Other logic related to adding to cart can go here
    // };;
  return (

    <div className="card" style={{width: "250px", height: "500px"}}>
      
  <img className='imageurl' src={product.imageurl}  height="350px" width="200px" background-color="grey"/>
  <div className="card-body">
    <h5 className="card-title" align-text="center">{product.name}</h5>
    <p className="card-text">Price : {product.price}</p>
    <p> {product.description}
    </p>
    <button className={`btn ${isInCart ? 'btn-danger' : 'btn-primary'}`} onClick={() => onToggleCart(product)}>
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>

    
        </div>
</div>
  );
        }

  

export default Card

