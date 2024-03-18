import "./App.scss";
import { ThemeProvider } from "@material-tailwind/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n.ts";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { ToastContainer } from "react-toastify";
import { setContext } from "@apollo/client/link/context";
import { ACCESS_TOKEN, getItemStorage } from "@/utils/localStorageHepler.ts";
import "react-toastify/dist/ReactToastify.css";

const endpoint = import.meta.env.VITE_REACT_GRAPHQL_ENDPOINT;

const httpLink = new HttpLink({ uri: endpoint });

const authLink = setContext(async (_, { headers }) => {
  try {
    const token = getItemStorage(ACCESS_TOKEN);
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  } catch (error) {
    console.log("Unauthorized", error);
    return headers;
  }
});

// const client = new ApolloClient({
//   uri: endpoint,
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <ApolloProvider client={client}>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
            <ToastContainer />
          </ApolloProvider>
        </I18nextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
