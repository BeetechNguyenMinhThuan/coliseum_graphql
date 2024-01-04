import React from "react";
import ReactDOM from "react-dom/client";
// import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import "./App.css";
// import {store} from "store/store";
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
// languages
import {I18nextProvider} from "react-i18next";
import i18n from './i18n';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            {/*<Provider store={store}>*/}
            <ApolloProvider client={client}>
                <RouterProvider router={router}/>
            </ApolloProvider>
            {/*</Provider>*/}
        </I18nextProvider>
    </React.StrictMode>
);
