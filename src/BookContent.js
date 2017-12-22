import React, { Component } from 'react';



class Book extends Component{
    Changeshelf(selectValue) {
        let {book, updateBook} = this.props;
        book.shelf = selectValue;
        updateBook(book);
    }
    render(){
        let {title,imageLinks,authors,shelf} = this.props.book;//解构
        if (!imageLinks) {
            imageLinks = {"thumbnail": "Unknown Link"};
        }
        return(
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover'style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.thumbnail}")`}}></div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={(event) => this.Changeshelf(event.target.value)}>
                                <option value="hint" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                </div>
                <div className="book-title">{title}</div>
                <div className='book-authors'>
                        <span key={authors}>{authors}</span>
                </div>
            </div>
        )
    }

}

export default Book
