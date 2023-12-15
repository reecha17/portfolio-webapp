import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({ products }) {
  return (
    <>
      <h2>Order</h2>
      <article>
        <p>Please select the quantity of each item you want to order!</p>
        <table>
          <caption>Please select one product to order!</caption>

          <thead>
            <tr>
              <th>Item, Company</th>
              <th>Price $</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {products.map((currentProduct, index) =>
              <ProductRow
                product={currentProduct}
                key={index}
              />
            )}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default OrderPage