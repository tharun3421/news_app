import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
}

export default App;
