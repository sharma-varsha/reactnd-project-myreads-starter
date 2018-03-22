import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyLibrary from './MyLibrary'
import Search from './Search'
import {Switch, Route} from 'react-router-dom'
import NoMatchedRouteComponent from './404page'


  class BooksApp extends React.Component {
    constructor() {
      super();
      this.state = {
      books:[]
    }
      this.getAllBooks = this.getAllBooks.bind(this);
    }
    
  componentDidMount() {
  this.getAllBooks();
  } 

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }
      render() {
        return (
          <div className="app">
          <Switch>
          <Route exact path='/search' render={({ history }) => (
              <Search getBooks={this.getAllBooks}  books={this.state.books} />
            )} />
            
            <Route exact path='/' render={({ history }) => (
                <div>
                <MyLibrary getBooks={this.getAllBooks} books={this.state.books}/> 
                </div>
            )} />
               <Route component={NoMatchedRouteComponent}/>
              </Switch>
            </div>
          )
          }
      }


  export default BooksApp
