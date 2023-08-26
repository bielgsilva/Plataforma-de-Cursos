import { useState } from 'react';
import BookList from './../ebooks/components/bookList/bookList';
import Cart from '../ebooks/components/cart/cart';
import './styles.css';
import SideBar from '../../components/layout/SideNavBar';
import { FaShoppingCart } from 'react-icons/fa';


const Ebooks = () => {

  const [isCartOpen, setIsCartOpen] = useState(false); // Novo estado para controlar o carrinho

  const [books] = useState([
    {
      id: 1, title: 'Vivendo Sushi - Faça Sushi em Casa', price: 37.98, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNemB-_-7Ed8eHXPz1Q6dLrcg50ZLoZDcEwkA6efAf1nIEHScFAxTOC668TFzg0Z4kHfQ'
    },

  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = book => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = index => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };


  const checkout = () => {
    alert('AINDA NÃO É POSSÍVEL REALIZAR COMPRAS');
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (

    <div className="ebook-container">
      <SideBar />

      <div className="cart-toggle-button" onClick={toggleCart}>
        <button>
          {isCartOpen ? 'X' :
            <div style={{ position: 'relative' }}>
              <FaShoppingCart style={{ fontSize: '24px' }} />
              {cartItems.length > 0 && (
                <span className="cart-icon-counter">{cartItems.length}</span>
              )}
            </div>
          }
        </button>
      </div>



      <div className='ebook-content'>
        <div className='ebook-list'>
          <h1>Cursos Vivendo Sushi</h1>
          <BookList books={books} addToCart={addToCart} />

        </div>
      </div>
      {isCartOpen && (
        <>
          <div className='modal-screen'></div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} closeCart={toggleCart} />
        </>
      )}
    </div>

  );
};

export default Ebooks;

