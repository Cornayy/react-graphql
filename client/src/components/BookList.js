import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooks } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }

    render() {
        return (
            <div>
                <ul id='book-list'>{this.displayBooks()}</ul>
                <BookDetails bookId={this.state.selected} />
            </div>
        );
    }

    displayBooks() {
        let data = this.props.data;

        if (data.loading) {
            return <div>Loading books..</div>;
        } else {
            return data.books.map(book => {
                return (
                    <li
                        key={book.id}
                        onClick={e => {
                            this.setState({ selected: book.id });
                        }}
                    >
                        {book.name}
                    </li>
                );
            });
        }
    }
}

export default graphql(getBooks)(BookList);
