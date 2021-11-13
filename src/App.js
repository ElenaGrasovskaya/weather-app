import "./App.css";
import { Input } from "./Input/App";

import { CardList } from "./CardList/App";

import { useCitiesList } from "./hooks/useCitiesList";

function App() {
  const [citiesList, dispatch] = useCitiesList();
  return (
    <div className="Main">
      <Input dispatch={dispatch}></Input>
      <CardList citiesList={citiesList} dispatch={dispatch}></CardList>
    </div>
  );
}

export default App;
