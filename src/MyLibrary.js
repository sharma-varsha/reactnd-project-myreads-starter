import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Sections from './Sections'


/* Function which handles to filter the books based on sections */
class MyLibrary extends Component {

render() {
    const {getBooks,books} =this.props;
   
    const currentlyReading = books.filter((book) => {
        return book.shelf === 'currentlyReading';
    });
   
    const wantToReadBooks = books.filter((book) => {
		return book.shelf === 'wantToRead';
		});
    
    const readBooks = books.filter((book) => {
		return book.shelf === 'read';
		});

    return (
        <div className="list-books">
        <div className="list-books-title">
                <h1>MyReads</h1>
        </div> 
                <div className="list-books-content">
               <Sections totalBooks={getBooks} value="currently Reading" section='Currently Reading' collection={currentlyReading}></Sections>
                <Sections totalBooks={getBooks}  value="Want to Read" section='Want to Read' collection={wantToReadBooks}></Sections>
                <Sections totalBooks={getBooks}  value="Read Books" section='Read' collection={readBooks}></Sections>  
               </div>

        <div className="open-search">
                <Link to='/search'>Add a book</Link>
                </div>               
    </div>

        )   
    }
 }

export default MyLibrary