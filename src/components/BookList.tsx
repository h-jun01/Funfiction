import * as React from "react";
import { Book } from "./config/BookData";
import { NavLink } from "react-router-dom";

interface BookListProps {
  books: Book[];
  targetCode: string;
}

const BookList: React.FC<BookListProps> = ({ books, targetCode }) => (
  <React.Fragment>
    {books.map(book => (
      <NavLink to={`/BookExplanation/${targetCode}/${book.id}`} key={book.id}>
        <div className="more" key={book.id}>
          <div className="more_image_area">
            <img src={book.src} alt="presentation" />
          </div>
          <div className="more_wrap">
            <p className="more_title">{book.title}</p>
            <p className="more_creator">{book.creator}</p>
            <p className="more_tag">{book.tag}</p>
          </div>
        </div>
      </NavLink>
    ))}
  </React.Fragment>
);

export default BookList;
