import {useTranslation} from "react-i18next";
import {useQuery} from "@apollo/client";
import {GET_BOOKS} from "graphql-client/book/queries.ts";
import { Banner } from "components/Banner/Banner";

const Home = () => {
    const {t} = useTranslation();

    // const {loading, data} = useQuery(
    //     GET_BOOKS,
    // );
    // if (!data || !data.books) {
    //     return 'Not found data';
    // }
    return (
        <>
         <div className="content">

         </div>
        </>
    );
};
export default Home;
