// ParentComponent.jsx

import React, { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';

function ParentComponent() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Card handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default ParentComponent;
