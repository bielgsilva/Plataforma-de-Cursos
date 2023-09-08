import React from 'react';
import './styles.css';

const OrderDetails = ({ cartItems, total }) => {
  return (
    <div className="order-details">
      <h2>Detalhes do Pedido ↓</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="order-item">
              <img src={item.imagem} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>Preço: R${item.price}</p>
              </div>
            </div>
            <hr/>
          </li>
        ))}
      </ul>
      <div className="order-total">
        <p>Total: R${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
