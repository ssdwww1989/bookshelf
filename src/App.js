import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'
import SearchBook from "./SearchBook";




class App extends Component {
    state = {
        wait:'waiting',
        books:[]
    }
    //获取所有图书
    componentDidMount(){
        BooksAPI.getAll().then((books)=>{
            this.setState({books})
            this.setState({wait:'down'})
        })
    }
    //更新图书
    updateBook(targetbook) {
        const { books } = this.state;
        let BookTrue = false;

        //检查移动的书是否存在于现在的books内
        let updatedBooks = books.map((book) => {//遍历现在状态内的所有的书本
            if (book.id === targetbook.id) {//如果目标图书存在于现有图书内
                BookTrue = true;
                return targetbook;//返回目标图书
            } else {
                return book;//返回所有图书
            }
        });

        if(!BookTrue){
            updatedBooks.push(targetbook);
        }
        //更新书架 books 等于 updateBooks
        BooksAPI.update(targetbook, targetbook.shelf).then(
            this.setState({ books: updatedBooks })

        );
    }

    render() {
        return (
            <div>
                <Route exact path="/search" render={() =>(<SearchBook resBook ={this.state.books}  updateBook={this.updateBook.bind(this)}/>)}/>
                <Route exact path="/" render={() =>(<BookList  updateBook = {this.updateBook.bind(this)} books = {this.state.books} waitState={this.state.wait}/>)}/>

            </div>
        );
  }
}

export default App;
