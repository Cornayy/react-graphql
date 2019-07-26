import React from 'react';
import { graphql } from 'react-apollo';
import { getAuthors } from '../queries/queries';

function AddBook(props) {
    return (
        <form id='add-book'>
            <div className='field'>
                <label>Book Name:</label>
                <input type='text' />
            </div>
            <div className='field'>
                <label>Genre:</label>
                <input type='text' />
            </div>
            <div className='field'>
                <label>Author:</label>
                <select>
                    <option>Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

function displayAuthors(props) {
    let data = props.data;

    if (data.loading) {
        return <div>Loading authors..</div>;
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

export default graphql(getAuthors)(AddBook);
