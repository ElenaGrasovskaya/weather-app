import "./App.css";
import { Input } from "./Input/App";
import React from "react";
import { CardList } from "./CardList/App";

import { useCitiesList } from "./hooks/useCitiesList";
export const GlobalContext= React.createContext();
function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList, editCity } = state;
  return (
    <GlobalContext.Provider value ={{state, dispatch}} >
    <div className="Main">
      <Input/>
      <CardList/>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
 