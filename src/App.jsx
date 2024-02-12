import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./Card";
import Navbar from "./Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentComponent from "./ParentComponent";

function App() {

  const [cart, setCart] = useState([0]);

  const handleToggleCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // Product is already in the cart, so remove it
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
    } else {
      // Product is not in the cart, so add it
      setCart([...cart, product]);
    }
  };
  let products = [
    {
      id:1,
      name: "GoSriKi",
      price: 300,
      description: "Women's Cotton Blend Regular Fit Kurtis",
      imageurl: "https://m.media-amazon.com/images/I/61OWZyPlnNL._SY741_.jpg",
    },
    {
      id:2,
      name: "ANNI DESIGNER",
      price: 300,
      description: "Women's Cotton Blend Regular Fit Kurtis",
      imageurl: "https://m.media-amazon.com/images/I/81271aov+AL._SY741_.jpg",
    },
    {
      id:3,
      name: "Bollyclues",
      price: 850,
      description: "GoSriKi Women's Chanderi Cotton Straight Printed Kurta ",
      imageurl: "https://m.media-amazon.com/images/I/71JeQFDrwPL._SX569_.jpg",
    },
    {
      id:4,
      name: "MIRCHI FASHION",
      price: 1020,
      description: "Women's Cotton Blend Regular Fit Kurtis",
      imageurl: "https://m.media-amazon.com/images/I/514b2AUTJhL._SY741_.jpg",
    },
    {
      id:5,
      name: "MIRCHI FASHION",
      price: 340,
      description: "GoSriKi Women's Cotton Blend Kurta ",
      imageurl: "https://m.media-amazon.com/images/I/61dz8iUT4DL._SY741_.jpg",
    },
    {
      id:6,
      name: "madhuram textiles",
      price: 880,
      description: "rytras Women's Rayon Printed Purple Nayra Kurta",
      imageurl: "https://m.media-amazon.com/images/I/612MK5U7faL._SY741_.jpg",
    },

    {
      id:7,
      name: "DHRUVI TRENDZ",
      price: 745,
      description: "Women's Cotton Blend Regular Fit Kurtis",
      imageurl: "https://m.media-amazon.com/images/I/71rUfB5bbPL._SY741_.jpg",
    },

    {
      id:8,
      name: "MIRCHI FASHION",
      price: 678,
      description: "Women's Cotton Blend Regular Fit Kurtis",
      imageurl: "https://m.media-amazon.com/images/I/61HdzJJaJTL._SY741_.jpg",
    },
  ];

  return (
    <div className="App">
      <Navbar setCart={() => cart.length} />
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-lg-12">
          <img
            className="img-fluid"
            src="https://m.media-amazon.com/images/S/aplus-media/sota/d5a79991-b3cf-4ba5-b325-0f8cd50ed2f9.__CR0,0,970,300_PT0_SX970_V1___.jpg"
          width="1200px"></img>
         
        </div>
          </div>
          
          
        <div className="row">
        
        
          {products.map((product) => {

return <Card
            key={product.id}
            product={product}
            onToggleCart={handleToggleCart}
            isInCart={cart.some((item) => item.id === product.id)}
          ></Card>
          })}
        
        
        
          
          
           
        </div>
      </div>
    </div>
  );
}

export default App;
