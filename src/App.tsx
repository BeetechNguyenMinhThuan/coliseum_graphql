import "./App.scss";
import { ThemeProvider } from "@material-tailwind/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n.ts";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { ToastContainer } from "react-toastify";

export const spaceshipPassengerVar = makeVar([]);
const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        isSpaceShipPassenger: {
          read(_, { readField }) {
            const userId = readField("user_id");
            return spaceshipPassengerVar().includes(userId);
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache,
});

function App() {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
          <ToastContainer />
        </ApolloProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
