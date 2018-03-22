import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI';

class Book extends Component {
   constructor(props) {
    super(props);
    this.state = {
    shelf: this.props.book.shelf
    }
  }

onShelfChange(shelf) {
     BooksAPI.update(this.props.book, shelf).then(() => {
      this.props.getBooks();
    });
}

render() {
    const book = this.props.book;
    const shelf = this.state.shelf;
    const ImageLink = (book.imageLinks === undefined) ? '' : book.imageLinks.thumbnail;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${ImageLink})`
            }}
          >
          </div>
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={(event) => this.onShelfChange(event.target.value)}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
      </div>
    );
  }

}





export default Book