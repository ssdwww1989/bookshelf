import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookContent from './BookContent'
import * as BooksAPI from './BooksAPI';




class SearchBook extends Component{
    state = {
        query:'',
        books:[],
        searchstate:'nostart'
    }
    //搜索书本
    searchBook(query){//传入输入的query值
        const{resBook} = this.props;//获取传递的book状态
        let searchTxt = query//获取输入的input值
        this.setState({query})//改变当前的query 状态
        this.setState({searchstate:'searching'})
        if(searchTxt===''){
            this.setState({books:[]});
            this.setState({searchstate:'nostart'})
            return
        }
        BooksAPI.search(searchTxt,10).then((books)=>{//搜索书库
            if(books && books.length){
                let resFbooks = books;
                let checkbooks = resFbooks.map((book)=>{//遍历books
                    let setshelf;
                        resBook.map((resBook)=>{//设置搜索到的书的状态
                            if(resBook.id === book.id){
                                setshelf = resBook;
                            }
                        })
                    book.shelf = setshelf ? setshelf.shelf:'none'//如果为真 则设置为setshelf的状态，如果为false则将状态设置为none
                    return book;
                })
                this.setState({books:checkbooks})
                this.setState({searchstate:'searcchdown'})
            }
        })

    }

    render(){
        const {books,query} = this.state;
        const {updateBook} = this.props;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input value={query} type="text" placeholder="Search by title or author" onChange = {(event)=>this.searchBook(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.searchstate==='searching'  &&(
                        <div className="sk-folding-cube">
                            <div className="sk-cube1 sk-cube"></div>
                            <div className="sk-cube2 sk-cube"></div>
                            <div className="sk-cube4 sk-cube"></div>
                            <div className="sk-cube3 sk-cube"></div>
                        </div>
                    )}
                    {this.state.searchstate==='searcchdown' &&(
                        <ol className="books-grid">
                            {
                                books.map((book)=>(
                                    <BookContent key={book.id} book={book} updateBook={updateBook}/>
                                ))
                            }
                        </ol>
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBook