const Book = ({ book, addToCart }) => {
  return (
    <div className="book flex-center-column">
      <h3>{book.title}</h3>
      <img src={book.imagem} alt="" />
      <p>Autor: {book.author}</p>
      <p>R${book.price}</p>
      <button onClick={() => addToCart(book)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Book;
