import React, { useState } from 'react';
import BookList from './../ebooks/components/bookList/bookList';
import Cart from '../ebooks/components/cart/cart';
import './styles.css';
import SideBar from '../../components/layout/SideNavBar';
import { FaShoppingCart } from 'react-icons/fa';
import MercadoPagoPage from './components/mercadopago';
import OrderDetails from './components/orderDetails';


const Ebooks = () => {
  const [isMercadoPagoOpen, setIsMercadoPagoOpen] = useState(false);

  const closeMercadoPago = () => {
    setIsMercadoPagoOpen(false);
  };


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [books] = useState([
    {
      id: 1,
      title: 'Vivendo Sushi - Faça Sushi em Casa',
      price: 37.98,
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNemB-_-7Ed8eHXPz1Q6dLrcg50ZLoZDcEwkA6efAf1nIEHScFAxTOC668TFzg0Z4kHfQ',
    },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const checkout = () => {
    if (total === 0) {
      return
    }
    setIsMercadoPagoOpen(true);
    setIsCartOpen(false)
  };


  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="ebook-container overlay1">

      <SideBar />

      <div className='overlay3'>
        {!isMercadoPagoOpen && (
          <>
            <div className="cart-toggle-button" onClick={toggleCart}>
              <button>
                {isCartOpen ? 'X' : (
                  <div style={{ position: 'relative' }}>
                    <FaShoppingCart style={{ fontSize: '24px' }} />
                    {cartItems.length > 0 && (
                      <span className="cart-icon-counter">{cartItems.length}</span>
                    )}
                  </div>
                )}
              </button>
            </div>

            <div className='ebook-content'>
              <div className='ebook-list'>
                <h1>Cursos Vivendo Sushi</h1>
                <BookList books={books} addToCart={addToCart} />
              </div>
            </div>

          </>
        )}

        {isCartOpen && (
          <>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} closeCart={toggleCart} total={total.toFixed(2)} />
          </>
        )}

        {isMercadoPagoOpen && (
          <>
            <div className='checkout-page flex-center'>
              <MercadoPagoPage bookPrice={total} closeMercadoPago={closeMercadoPago} total={total} />
              <OrderDetails cartItems={cartItems} total={total} />

            </div>

          </>
        )}
      </div>
    </div>
  );
};

export default Ebooks;











