import React from 'react';
import { graphql } from 'react-apollo';
import { getBooks } from '../queries/queries';

function BookList(props) {
    return (
        <div>
            <ul id='book-list'>{displayBooks(props)}</ul>
        </div>
    );
}

function displayBooks(props) {
    let data = props.data;

    if (data.loading) {
        return <div>Loading books..</div>;
    } else {
        return data.books.map(book => {
            return <li key={book.id}>{book.name}</li>;
        });
    }
}

export default graphql(getBooks)(BookList);
