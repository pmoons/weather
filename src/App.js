import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";
import LocationPicker from "./containers/LocationPicker";
import CurrentWeather from "./containers/CurrentWeather";
import "./App.scss";

const client = new ApolloClient({ uri: "http://localhost:4000" });
const store = createStore(reducers);

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="app">
          <header>
            <LocationPicker />
          </header>
          <main>
            <CurrentWeather />
          </main>
          <footer>
            <a href="https:/github.com/pmoons/weather">Github</a>
            <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
          </footer>
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
