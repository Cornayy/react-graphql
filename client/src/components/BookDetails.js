import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBook } from '../queries/queries';

class BookDetails extends Component {
    render() {
        return <div id='book-details'>{this.displayBookDetails()}</div>;
    }

    displayBookDetails() {
        //ES6 Destructuring to grab the book object from the data.
        const { book } = this.props.data;

        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>Genre: {book.genre}</p>
                    <p>Author: {book.author.name}</p>
                    <p>All books by this author: </p>
                    <ul className='other-books'>
                        {book.author.books.map(book => {
                            return <li key={book.id}>{book.name}</li>;
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div>No book selected..</div>;
        }
    }
}

export default graphql(getBook, {
    options: props => {
        return {
            variables: {
                id: props.bookId
            }
        };
    }
})(BookDetails);
