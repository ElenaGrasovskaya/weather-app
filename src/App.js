import "./App.css";
import { Input } from "./Input/App";

import { CardList } from "./CardList/App";
import { useState } from "react";

function App() {
  const [citiesList, setCitiesList] = useState([]);

  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList}></Input>
      <CardList citiesList={citiesList}></CardList>
    </div>
  );
}

export default App;
