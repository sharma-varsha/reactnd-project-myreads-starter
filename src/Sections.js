import React, {Component} from 'react'
import Book from './Book'

/* Calls Book Component paint the each book */


class Sections extends Component {
  render() {
       const books = this.props.collection;
       const getAllBooks =this.props.totalBooks;
  return(
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.section}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {books.map((book)=>(
                      <li key={book.id}>
                      <Book  getBooks={getAllBooks} book={book}/>
                      </li>
                        ))}
                      </ol>
                        </div>
                        </div>
                        </div>
        );
    }

}

export default Sections
