import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import CommentTable from "./components/CommentTable/CommentTable";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <NavBar onSearch={setSearchText} />
      <CommentTable searchQuery={searchText} />
    </div>
  );
}

export default App;
