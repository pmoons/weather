import React from "react";
import LocationPicker from "./components/LocationPicker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <LocationPicker />
      </main>
      <footer>
        <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      </footer>
    </div>
  );
}

export default App;
