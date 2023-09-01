import Book from '../book/index';
import './styles.css'


const BookList = ({ books, addToCart }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.id} book={book} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default BookList;
