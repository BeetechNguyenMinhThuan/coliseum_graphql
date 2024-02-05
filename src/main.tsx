import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
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
import { I18nextProvider } from "react-i18next";

export const spaceshipPassengerVar = makeVar([]);
const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        isSpaceShipPassenger: {
          read(_, { readField }) {
            const userId = readField("user_id");
            console.log(userId);
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
          <App />
          <ToastContainer />
        </ApolloProvider>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
