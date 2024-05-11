import { useState } from "react";

import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <main className="space-y-12">
        <SearchBar setSearchResults={setSearchResults} />
        <CardList searchResults={searchResults} />
      </main>
    </>
  );
}

export default App;
