import {useTranslation} from "react-i18next";
import {useQuery} from "@apollo/client";
import {GET_BOOKS} from "graphql-client/book/queries.ts";

const Home = () => {
    const {t} = useTranslation();

    const {loading, data} = useQuery(
        GET_BOOKS,
    );
    if (!data || !data.books) {
        return 'Not found data';
    }
    return (
        <>
            <div>{t('common.home')}</div>
            <div>
                <h3>Available Inventory</h3>
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Genre</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data && data.books.map((book) => (
                            <tr className='' key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.genre}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};
export default Home;
