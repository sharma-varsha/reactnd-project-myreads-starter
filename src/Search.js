import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


import Sections from './Sections'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			query: ''
		}
		this.updateQuery = this.updateQuery.bind(this);
		this.searchBackEnd = this.searchBackEnd.bind(this);
	}
	
	updateQuery(query) {
		this.setState({query});
	    this.searchBackEnd(query.trim());
	}

searchBackEnd(inputQuery) {
			if(inputQuery.length <= 1) {
			this.setState({results: []});
			}
				else {
						BooksAPI.search(inputQuery).then((queryBooks) => {
							if(queryBooks){
								this.setState ({
									results: queryBooks.map((book) => {
										const BookonShelf = this.props.books.find(BookonShelf => BookonShelf.id === book.id);
										book.shelf = BookonShelf ? BookonShelf.shelf : 'None';
										return book;
								})
							});
						}
						}).catch((data) => {
							console.log('Unable to search "' + inputQuery);
							this.setState({results: []});
						})
					}
	}

		render() {
			const getBooks = this.props.getBooks;
			return(
				<div className="search-books">
					<div className="search-books-bar">
						<Link to='/' className="close-search">Close</Link>
							<div className="search-books-input-wrapper">
							<input type="text" value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)} placeholder="Search by title or author"/>
							</div>
					</div>
					<Sections totalBooks={getBooks} value="Search" section="" collection={this.state.results}></Sections>
				</div>
			)
		}
	}

export default Search