import {I18nextProvider} from "react-i18next";
import i18n from "./i18n.ts";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import "./App.css";


const client = new ApolloClient({
    uri: 'http://localhost:5000',
    cache: new InMemoryCache(),
});
const App = () => {
    return (
        <I18nextProvider i18n={i18n}>
            {/*<Provider store={store}>*/}
            <ApolloProvider client={client}>
                <RouterProvider router={router}/>
            </ApolloProvider>
            {/*</Provider>*/}
        </I18nextProvider>
    );
};

export default App;