import "./App.css";
import React from "react";
import { useState } from "react";
import data from "./data.js";

function App() {
  const [term, setTerm] = useState("");

  const filterName = (searchTerm) => {
    console.log("search", searchTerm);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={() => filterName(term)}>Search</button>
      <div>
        {data
          .filter((item) => {
            const termsearched = term.toLowerCase();
            const fullname = item.fullname.toLowerCase();
            return term && fullname.includes(termsearched);
          })
          .map((item) => (
            <li key={item.fullname}>
              <ul>{item.fullname}</ul>
            </li>
          ))}
      </div>
    </div>
  );
}

export default App;
