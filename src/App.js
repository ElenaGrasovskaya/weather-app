import "./App.css";
import { Input } from "./Input/App";

import { CardList } from "./CardList/App";

import { useCitiesList } from "./hooks/useCitiesList";

function App() {
  const [citiesList, setCitiesList] = useCitiesList();
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList}></Input>
      <CardList citiesList={citiesList}></CardList>
    </div>
  );
}

export default App;
