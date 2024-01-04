import {gql} from '__generated__/gql.ts'

export const GET_BOOKS = gql(`
    query getBooksQuery {
        books{
            id
            name
            genre
        }
    }
`);

export const getSingleBook = gql(`
    query getSingleBookQuery($id: ID!)  {
        book(id: $id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    id
                    name
                    genre
                }
            }
        }
    }
`);

