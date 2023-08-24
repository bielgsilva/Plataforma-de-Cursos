import { useState } from 'react';
import BookList from './../ebooks/components/bookList/bookList';
import Cart from '../ebooks/components/cart/cart';
import './styles.css';
import SideBar from '../../components/layout/SideNavBar';
import { FaShoppingCart } from 'react-icons/fa';


const Ebooks = () => {

  const [isCartOpen, setIsCartOpen] = useState(false); // Novo estado para controlar o carrinho

  const [books, setBooks] = useState([
    {
      id: 1, title: 'Book 1', author: 'Author 1', price: 10, imagem: 'https://fimdasdores.space/wp-content/uploads/2023/07/Ebook-sem-fundo-e1688403753626.png'
    },
    {
      id: 2, title: 'Book 2', author: 'Author 2', price: 15, imagem: 'https://fimdasdores.space/wp-content/uploads/2023/07/Ebook-sem-fundo-e1688403753626.png'
    },
    {
      id: 3, title: 'Book 2', author: 'Author 2', price: 15, imagem: 'https://fimdasdores.space/wp-content/uploads/2023/07/Ebook-sem-fundo-e1688403753626.png'
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
          <h1>E-Book Store</h1>
          <BookList books={books} addToCart={addToCart} />

        </div>
      </div>
      {isCartOpen && (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} closeCart={toggleCart} />
      )}
    </div>

  );
};

export default Ebooks;

