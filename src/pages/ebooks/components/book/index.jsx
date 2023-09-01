import './styles.css'

const Book = ({ book, addToCart }) => {
  return (
    <div className="book flex-center-column">
      <img src={book.imagem} alt="" />
      <h3>{book.title}</h3>
      <p>R${book.price}</p>
      <button onClick={() => addToCart(book)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Book;
