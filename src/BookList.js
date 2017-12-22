import React, { Component } from 'react';
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'




class BookList extends Component{
    //匹配状态
    MatchState(books, bookshelf) {
        return books.filter((book) => book.shelf === bookshelf);
    }
    render() {
        const {updateBook,waitState} = this.props;
        return (
            <div>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                <div className="book-title">
                    <Bookshelf updateBook={updateBook} books={this.MatchState(this.props.books,'currentlyReading')} classification="currently Reading" waitState={waitState}/>
                  <Bookshelf updateBook={updateBook} books={this.MatchState(this.props.books,'wantToRead')}  classification="want To Read" waitState={waitState}/>
                  <Bookshelf updateBook={updateBook} books={this.MatchState(this.props.books,'read')}  classification ="read"waitState={waitState}/>
                </div>
                <div className="open-search">
                    <Link to='/search'>ADD BOOK</Link>
                </div>


            </div>



        );
    }
}


export  default BookList