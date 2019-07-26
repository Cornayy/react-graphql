import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Custom Components
import BookList from './components/BookList';

//Apollo Setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div id='main'>
                <h1>Reading List</h1>
                <BookList />
            </div>
        </ApolloProvider>
    );
}

export default App;
