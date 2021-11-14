import "./App.css";
import { Input } from "./Input/App";

import { CardList } from "./CardList/App";

import { useCitiesList } from "./hooks/useCitiesList";

function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList, editCity } = state;
  return (
    <div className="Main">
      <Input dispatch={dispatch} inputValue={inputValue} editCity = {editCity}></Input>
      <CardList citiesList={citiesList} dispatch={dispatch}></CardList>
    </div>
  );
}

export default App;
