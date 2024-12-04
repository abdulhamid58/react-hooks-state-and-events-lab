// App.js
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";


function App() {
  const [mode, setMode] = useState("light");


  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };


  return (
    <div className={`App ${mode}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}


export default App;


