import React, { useState, useEffect } from 'react';
import BookList from './../ebooks/components/bookList/bookList';
import Cart from '../ebooks/components/cart/cart';
import './styles.css';
import SideBar from '../../components/layout/SideNavBar';
import { FaShoppingCart } from 'react-icons/fa';
import MercadoPagoPage from './components/mercadopago';
import OrderDetails from './components/orderDetails';
import ebook from '../../assets/ebook.png'
import { getUser } from '../../services/getUser';



const Ebooks = () => {
  const [user, setUser] = useState(null);
  const userEmail = localStorage.getItem('userEmail');


  useEffect(() => {
    if (user) {
      return
    }

    async function fetchUserData() {
      try {
        const userData = await getUser(userEmail);
        setUser(userData);

      } catch (error) {

        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [user, userEmail]);





  const [isMercadoPagoOpen, setIsMercadoPagoOpen] = useState(false);

  const closeMercadoPago = () => {
    setIsMercadoPagoOpen(false);
  };


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [books] = useState([
    {
      id: 1,
      title: 'Vivendo Sushi - Faça Sushi em Casa',
      price: 0.99,
      imagem: ebook,
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
    <>
      <div className="ebook-container overlay1">

        <SideBar />
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

            <div className='ebook-content '>
              <div className='ebook-list'>
                <h1>Cursos Vivendo Sushi</h1>
                <BookList books={books} addToCart={addToCart} />
              </div>
            </div>

          </>
        )}

        {isCartOpen && (

          <Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} closeCart={toggleCart} total={total.toFixed(2)} />

        )}

        {isMercadoPagoOpen && (

          <div className='ebook-checkout'>
            <div className='ebook-checkout-mp'>
              <MercadoPagoPage bookPrice={total} closeMercadoPago={closeMercadoPago} total={total} name={user.name} email={user.email} />
            </div>
            <div className='ebook-checkout-details'>
              <OrderDetails cartItems={cartItems} total={total} />
            </div>
          </div>




        )}

      </div >
    </>
  );
};

export default Ebooks;










