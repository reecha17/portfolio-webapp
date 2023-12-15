import React, { useState } from 'react';
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);
  const increaser = () => setQuantity(quantity === 10 ? quantity : quantity + 1);
  const decreaser = () => setQuantity(quantity === 0 ? 0 : quantity - 1);

  return (
    <div className='quantity'>
      <IoIosAddCircle onClick={increaser} />
      <span>{quantity}</span>
      <IoIosRemoveCircle onClick={decreaser} />
    </div>
  );
}

export default ProductQuantity