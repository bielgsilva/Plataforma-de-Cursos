const Cart = ({ cartItems, removeFromCart, checkout, closeCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart flex-center-column">
      <button onClick={closeCart} className="close-cart-btn">
        X
      </button>
      <ul>
        {cartItems.map((item, index) => (
          <li key={item.id} className="flex-center-column">
            <img src={item.imagem} alt="" />
            <p>R${item.price}</p>
            <button onClick={() => removeFromCart(index)}>X</button>
          </li>
        ))}

      </ul>

      <div className="w100 flex-center-column">
        <button onClick={checkout} className="checkout flex-center">
          <p>Total:  R${total}</p>
        </button>
      </div>

    </div>
  );
};

export default Cart;
