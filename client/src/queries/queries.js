import { gql } from 'apollo-boost';

const getAuthors = gql`
    {
        authors {
            name
            id
        }
    }
`;

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

export { getAuthors, getBooks };
