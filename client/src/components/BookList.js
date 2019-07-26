import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooks = gql`
    {
        books {
            name
            id
            author {
                name
                age
            }
        }
    }
`;

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
