import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import LocationPicker from "./components/LocationPicker";
import "./App.css";

const client = new ApolloClient({ uri: "http://localhost:4000" });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <main>
          <LocationPicker />
        </main>
        <footer>
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
