import React, { Component } from 'react';
import BookContent from './BookContent'


class Bookshelf extends Component{
    render(){
        const {updateBook,waitState} = this.props;
        return(
            <div className='bookshelf'>
                <h2 className="bookshelf-title">{this.props.classification}</h2>
                {waitState === 'waiting' &&(
                    <div className='bookshelf-books'>
                        <div className="sk-fading-circle">
                            <div className="sk-circle1 sk-circle"></div>
                            <div className="sk-circle2 sk-circle"></div>
                            <div className="sk-circle3 sk-circle"></div>
                            <div className="sk-circle4 sk-circle"></div>
                            <div className="sk-circle5 sk-circle"></div>
                            <div className="sk-circle6 sk-circle"></div>
                            <div className="sk-circle7 sk-circle"></div>
                            <div className="sk-circle8 sk-circle"></div>
                            <div className="sk-circle9 sk-circle"></div>
                            <div className="sk-circle10 sk-circle"></div>
                            <div className="sk-circle11 sk-circle"></div>
                            <div className="sk-circle12 sk-circle"></div>
                        </div>
                    </div>
                )}
                {waitState === 'down' &&(
                    <div className='bookshelf-books'>
                        <ol className='books-grid'>
                            {this.props.books.map((book)=>(
                                <li key={book.id}>
                                    <BookContent updateBook={updateBook} book={book}  />
                                </li>
                            ))}
                        </ol>
                    </div>
                )}

            </div>
        )
    }
}

export default Bookshelf
