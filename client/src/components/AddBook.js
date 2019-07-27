import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthors, getBooks, addBook } from '../queries/queries';

class AddBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    render() {
        return (
            <form id='add-book' onSubmit={this.submitForm.bind(this)}>
                <div className='field'>
                    <label>Book Name: </label>
                    <input
                        type='text'
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                </div>
                <div className='field'>
                    <label>Genre: </label>
                    <input
                        type='text'
                        onChange={e => this.setState({ genre: e.target.value })}
                    />
                </div>
                <div className='field'>
                    <label>Author: </label>
                    <select
                        onChange={e =>
                            this.setState({ authorId: e.target.value })
                        }
                    >
                        <option>Select Author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }

    displayAuthors() {
        let data = this.props.getAuthors;

        if (data.loading) {
            return <option disabled>Loading authors..</option>;
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>
                        {author.name}
                    </option>
                );
            });
        }
    }

    submitForm(e) {
        e.preventDefault();

        this.props.addBook({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [
                {
                    query: getBooks
                }
            ]
        });

        e.target.reset();
    }
}

export default compose(
    graphql(getAuthors, { name: 'getAuthors' }),
    graphql(addBook, { name: 'addBook' })
)(AddBook);
